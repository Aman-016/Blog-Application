import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';

dotenv.config();

const app = express();
const __dirname = path.resolve();

/* ---------------- MIDDLEWARES ---------------- */

app.use(express.json());
app.use(cookieParser());

/* ✅ CORS (works locally + Render) */
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://blog-application-1-ih88.onrender.com',
    ],
    credentials: true,
  })
);

/* ---------------- API ROUTES ---------------- */

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

/* ---------------- FRONTEND SERVE ---------------- */

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

/* ---------------- ERROR HANDLER ---------------- */

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    statusCode: err.statusCode || 500,
    message: err.message || 'Internal Server Error',
  });
});

/* ---------------- DB + SERVER ---------------- */

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('❌ Mongo error:', err.message);
  });
