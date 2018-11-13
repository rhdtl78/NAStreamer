const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, lowercase: true },
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  uploadDate: { type: Date, default: Date.now },
  like: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  src: { type: string },
  hashtag: [String],
  relativeVideo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
  id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('Video', videoSchema)
