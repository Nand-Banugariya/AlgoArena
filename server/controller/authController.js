// controller/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Generate JWT token, expires in 2 days
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
