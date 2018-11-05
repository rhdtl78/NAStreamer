const mongoose = require('mongoose')

const userVideoSchema = new mongoose.Schema({
  video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  lastViewDate: { type: Date, default: Date.now },
  time: { type: Number, default: 0 },
  id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('UserVideo', userVideoSchema)
