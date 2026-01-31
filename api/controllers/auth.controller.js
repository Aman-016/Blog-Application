import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validation
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Hash password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({
      message: "Signup successful",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
