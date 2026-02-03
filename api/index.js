import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from './routes/comment.route.js';

dotenv.config();

const app = express();

/* ✅ CORS — correct & safe */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

/* ✅ Middlewares */
app.use(express.json());
app.use(cookieParser());

/* ✅ Routes */
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use('/api/comment', commentRoutes);

/* ✅ Error handler */
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
  });
});

/* ✅ DB + server */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("API server running on port 3000");
    });
  })
  .catch((err) => console.log(err));
