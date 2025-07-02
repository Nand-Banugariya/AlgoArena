const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'teacher'], required: true },
  userid: { type: String, required: true, unique: true },
  isLoggedIn: { type: Boolean, default: false } // Track login status
});

module.exports = mongoose.model('User', userSchema);
