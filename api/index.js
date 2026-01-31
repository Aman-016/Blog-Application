import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

// ✅ Parse JSON bodies (THIS FIXES req.body)
app.use(express.json());

// ✅ Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// ✅ Global error handler (LAST middleware)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// ✅ MongoDB + Server start (LAST STEP)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("API server is running on 3000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

export default app;
