// controller/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Clear any existing token cookie before setting a new one (for cross-user login in same browser)
    res.clearCookie('token', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Check if user is already logged in
    if (user.isLoggedIn) {
      return res.status(403).json({ message: 'User is already logged in elsewhere. Please logout first.' });
    }
    // Set isLoggedIn to true
    user.isLoggedIn = true;
    await user.save();
    // Generate JWT token (no sessionId)
    const token = jwt.sign(
      { userid: user.userid, role: user.role, email: user.email },
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
    // Find user by token and set isLoggedIn to false
    const token = req.cookies?.token;
    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET);
      await User.updateOne({ userid: decoded.userid }, { $set: { isLoggedIn: false } });
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
