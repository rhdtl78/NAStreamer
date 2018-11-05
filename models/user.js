const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, trim: true },
  nickname: String,
  id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('User', userSchema)
