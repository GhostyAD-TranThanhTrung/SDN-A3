const express = require('express');
const cors = require('cors');
const app = express();
const quiz = require('./router/quizRouter');
const user = require('./router/userRouter');
const connectDB = require('./dbConnection')
const jwt = require('jsonwebtoken')

require('dotenv').config();

connectDB();

// Configure CORS to allow requests from frontend
const allowedOrigins = [
  'http://localhost:5173', // Local development
  'http://localhost:3000', // Alternative local port
  process.env.FRONTEND_URL, // Production frontend URL
  'https://your-frontend-app.vercel.app' // Replace with your actual frontend URL
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  optionsSuccessStatus: 200
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/quizzes', quiz);
app.use('/users', user);

app.get('/', (req, res) => {
  res.send('Hello, the server is running');
})

// Export the app for Vercel
module.exports = app;

// Only listen if not in serverless environment
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}