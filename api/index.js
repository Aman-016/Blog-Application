import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

/* Middlewares */
app.use(express.json());
app.use(cookieParser());

/* CORS */
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

/* API ROUTES FIRST */
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

/* Serve frontend */
app.use(express.static(path.join(__dirname, "client/dist")));

/* SPA fallback — IMPORTANT */
app.get("*", (req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    return res.status(404).json({ message: "API route not found" });
  }
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

/* Error handler */
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

/* DB + Server */
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log("Server running on port " + PORT)
    );
  })
  .catch((err) => console.log(err));
