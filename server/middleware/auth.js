// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Middleware to verify JWT token from cookies
module.exports = async (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // Check sessionId matches the latest in DB
    const user = await User.findOne({ userid: decoded.userid });
    if (!user || user.sessionId !== decoded.sessionId) {
      // Clear the token cookie if session is invalid
      res.clearCookie('token', {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
      });
      return res.status(401).json({ message: 'Session expired or logged in elsewhere' });
    }
    req.user = decoded;
    next();
  } catch (err) {
    // Clear the token cookie if token is invalid
    res.clearCookie('token', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    });
    return res.status(401).json({ message: 'Token is not valid' });
  }
};
