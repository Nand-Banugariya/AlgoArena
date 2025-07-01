const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'teacher'], required: true },
  userid: { type: String, required: true, unique: true },
  sessionId: { type: String, default: null }, // For single session enforcement
});

module.exports = mongoose.model('User', userSchema);
