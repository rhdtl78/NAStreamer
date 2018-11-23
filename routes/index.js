const express = require('express')
const router = express.Router()
const authCheckMiddleware = require('./middleware/auth-check')
const Video = require('../models/video')
const multer = require('multer')
const upload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'explore/public/')
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname)
    }
  })
})
router.use('/', authCheckMiddleware)
router.post('/', upload.single('avatar'), function(req, res) {
  let video = new Video()
  video.title = req.file.originalname
  video.uploader = req.user._id
  video.src = req.file.path
  video.viewCount = 0
  video.save()
  res.json({ success: true, filename: req.file.originalname })
})

module.exports = router
