// Basic Express server setup
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const logger = require('./middleware/logger');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  credentials: true
}));
app.use(express.json());
app.use(logger);
app.use(cookieParser());

// Routes
app.use('/api', authRoutes);

// MongoDB connection (update URI as needed)
mongoose.connect('mongodb://127.0.0.1:27017/coding', {
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
