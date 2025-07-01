// controller/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Prevent multiple logins: if user already has a sessionId, deny login
    if (user.sessionId) {
      return res.status(403).json({ message: 'User already logged in elsewhere. Please logout first.' });
    }
    // Generate a new sessionId for this login
    const sessionId = crypto.randomBytes(16).toString('hex');
    user.sessionId = sessionId;
    await user.save();
    // Generate JWT token, include sessionId
    const token = jwt.sign(
      { userid: user.userid, role: user.role, email: user.email, sessionId },
      JWT_SECRET,
      { expiresIn: '2d' }
    );
    // Set token in HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
    res.json({
      role: user.role,
      userid: user.userid,
      name: user.name,
      email: user.email
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.logout = async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET);
      await User.updateOne({ userid: decoded.userid }, { $set: { sessionId: null } });
    }
    res.clearCookie('token', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
    res.json({ message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Logout failed' });
  }
};
