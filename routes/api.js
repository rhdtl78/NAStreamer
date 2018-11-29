const fs = require('fs')
const express = require('express')
const router = express.Router()
const authCheckMiddleware = require('./middleware/auth-check')
const Video = require('../models/video')
const UserVideo = require('../models/user_video')

router.get('/', async (req, res) => {
  const video = await Video.findOne({ _id: req.query.uid })
  const path = video.src
  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range
  if (range) {
    const parts = range.replace(/bytes=/, '').split('-')
    const start = parseInt(parts[0], 10)
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
    const chunksize = end - start + 1
    const file = fs.createReadStream(path, { start, end })
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4'
    }
    res.writeHead(206, head)
    file.pipe(res)
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4'
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
})
router.post('/modifyVideoMeta', async (req, res) => {
  const { name, category, hashtag } = req.body
  await Video.findByIdAndUpdate(
    req.query.uid,
    {
      $set: { title: name, category },
      $push: { hashtag: hashtag }
    },
    { new: true }
  )
  res.json({ message: true })
})
router.get('/getvideometa/:uid', async (req, res) => {
  let video = {}
  try {
    video = await Video.findOne({ _id: req.params.uid }).populate(
      'uploader',
      'name'
    )
    video.viewCount += 1
    video.save()
  } catch (err) {
    console.log(err)
  }
  res.json(video)
})
router.get('/video/allList', async (req, res) => {
  let result = []
  result = await Video.find().populate('uploader', 'name')
  res.json({ result: result, success: true })
  /*fs.readdir('./explore/public', function(err, file) {
    if (err) res.json({ result: [], success: false })
    file.forEach(file => {
      var ext = file.substring(file.length - 3, file.length)
      if (ext === 'mp4' || ext === 'avi' || ext === 'mkv') result.push(file)
    })
    res.json({ result: result, success: true })
  })*/
})
router.use('/getVideoProgress', authCheckMiddleware)
router.get('/getVideoProgress/:uid', async (req, res) => {
  const result = {}
  if (req.user) {
    let userVideo
    userVideo = await UserVideo.findOne({
      user: req.user._id,
      video: req.params.uid
    })
    if (!userVideo) {
      userVideo = new UserVideo()
      userVideo.user = req.user._id
      userVideo.video = req.params.uid
      await userVideo.save()
    }
    result.userVideo = userVideo
    result.success = true
  } else {
    result.success = false
    result.userVideo = {}
  }
  res.json(result)
})
router.use('/saveVideoProgress', authCheckMiddleware)
router.post('/saveVideoProgress/:uid', async (req, res) => {
  if (req.user) {
    let userVideo
    userVideo = await UserVideo.findById(req.params.uid)
    if (!userVideo) {
      // TODO 에러처리
    }
    userVideo.time = req.body.currentTime
    userVideo.save()
  } else {
    // TODO: 예외처리
  }
})
router.use('/getUserVideos', authCheckMiddleware)
router.get('/getUserVideos/', async (req, res) => {
  const result = await UserVideo.find({ user: req.user._id })
  res.json(result)
})
router.use('/example', authCheckMiddleware)
router.get('/example', async (req, res) => {
  res.send(`Hello! ${req.user}`)
})
module.exports = router
