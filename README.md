# Assignment 3 SDN - Backend Deployment on Vercel

## Environment Variables Required

When deploying to Vercel, you need to set these environment variables in your Vercel dashboard:

1. **MONGO_URI** - Your MongoDB connection string (use MongoDB Atlas for production)
2. **JWT_SECRET** - A strong secret key for JWT tokens
3. **FRONTEND_URL** - URL of your deployed frontend (e.g., https://your-frontend.vercel.app)

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file with:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=3000
   FRONTEND_URL=http://localhost:5173
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Production Deployment

1. **MongoDB Setup**:
   - Create a MongoDB Atlas account
   - Create a new cluster and database
   - Get the connection string and add it to Vercel environment variables

2. **Vercel Deployment**:
   - Connect your GitHub repository to Vercel
   - Set the environment variables in Vercel dashboard
   - Deploy

## API Endpoints

- `GET /` - Health check
- `POST /users/register` - User registration
- `POST /users/login` - User login
- `GET /quizzes` - Get all quizzes
- `POST /quizzes` - Create quiz (authenticated)
- `GET /quizzes/:id` - Get quiz by ID
- `PUT /quizzes/:id` - Update quiz (authenticated)
- `DELETE /quizzes/:id` - Delete quiz (authenticated)

## CORS Configuration

The app is configured to accept requests from:

- `http://localhost:5173` (local development)
- `http://localhost:3000` (alternative local port)
- The URL specified in `FRONTEND_URL` environment variable
