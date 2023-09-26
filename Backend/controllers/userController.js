const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");

const User = db.users;

const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    // Check if the email is already in use
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    // Generate a JWT token for the user
    const token = jwt.sign({ id: newUser.id }, process.env.secretKey, {
      expiresIn: "1d",
    });

    // Set the JWT token as a cookie in the response
    res.cookie("jwt", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });

    // Respond with the newly created user
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find a user by their email
    const user = await User.findOne({ where: { email } });

    // If the user does not exist, respond with an authentication error
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If the passwords match, generate a JWT token
    if (isPasswordValid) {
      const token = jwt.sign({ id: user.id }, process.env.secretKey, {
        expiresIn: "1d",
      });

      // Set the JWT token as a cookie in the response
      res.cookie("jwt", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });

      // Respond with the user data (excluding the password)
      res.status(200).json({
        id: user.id,
        userName: user.userName,
        email: user.email,
      });
    } else {
      // If the passwords do not match, respond with an authentication error
      res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createUser,
  loginUser,
};
