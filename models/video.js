const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true },
  uploader: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  uploadDate: { type: Date, default: Date.now },
  like: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  hashtag: [String],
  relativeVideo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
  id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('Video', videoSchema)
