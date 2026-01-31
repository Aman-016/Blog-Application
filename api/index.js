import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from "./routes/user.route.js";

dotenv.config();


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB:', err);
});


const app = express();

app.listen(3000, () => {
  console.log('API server is running on 3000');
});

export default app;


app.use('/api/user', userRoutes);


