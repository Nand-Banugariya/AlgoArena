const express = require('express');
const router = express.Router();
const { login, logout } = require('../controller/authController');

// POST /api/login
router.post('/login', login);
// POST /api/logout
router.post('/logout', logout);

module.exports = router;
