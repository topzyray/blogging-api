import express from 'express';
import bodyParser from 'body-parser';
import blogRoute from './routes/blog.route.js';
import userRoute from './routes/user.route.js';

const app = express();

// Middlewares to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api/v1/blogs', blogRoute);
app.use('/api/v1/users', userRoute);

// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode,
  });
});

export default app;
