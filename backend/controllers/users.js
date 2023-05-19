import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../db-config.js";

// User registration
export const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if the username already exists
    const [existingUser] = await pool.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (existingUser.length > 0) {
      return res.status(409).json({ message: "Username already exists" });
    }

    // Insert the new user into the database
    await pool.query("INSERT INTO users (username, password) VALUES (?, ?)", [
      username,
      hashedPassword,
    ]);

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return next(error);
  }
};

// User login
export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Retrieve the user from the database
    const [users] = await pool.query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);

    if (users.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const user = users[0];
    console.log("user, backend:", user);
    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    // Set the JWT token as a cookie
    res.cookie("token", token, { httpOnly: true });
    console.log("token:", token);
    return res
      .status(200)
      .json({ message: "User logged in successfully", token, user });
  } catch (error) {
    return next(error);
  }
};

// users.js

// Get user by ID
export const getUserById = async (req, res, next) => {
  try {
    const [userId] = req.params.userId;
    console.log("hola", userId);
    // Retrieve the user data from the database based on the user ID
    const user = await pool.query("SELECT * FROM users WHERE id = ?", [userId]);

    // Check if the user exists
    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user data
    return res.status(200).json(user[0]);
  } catch (error) {
    return next(error);
  }
};

export const authenticate = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Verify the JWT token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // Add the decoded user ID to the request object
      req.userId = decoded.userId;

      return next();
    });
  } catch (error) {
    return next(error);
  }
};

export const logout = (req, res) => {
  // Clear the authentication cookie
  res.clearCookie("token");

  // Optionally, you can also invalidate the JWT token on the server-side if required

  return res.status(200).json({ message: "Logout successful" });
};
