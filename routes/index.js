const express = require('express')
const router = express.Router()

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

router.post('/', upload.single('avatar'), function(req, res) {
  res.json({ success: true })
})

module.exports = router
