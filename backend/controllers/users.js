import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../db-config.js';

// User registration
export const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Check if the password meets the minimum length requirement
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: 'Password must be at least 8 characters long' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if the username already exists
    const [existingUser] = await pool.query(
      'SELECT * FROM users WHERE username = ?',
      [username],
    );

    if (existingUser.length > 0) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Insert the new user into the database
    await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [
      username,
      hashedPassword,
    ]);

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return next(error);
  }
};

// User login
export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Retrieve the user from the database
    const [users] = await pool.query(
      'SELECT id, username, password FROM users WHERE username = ?',
      [username],
    );

    if (users.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const user = users[0];

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '7d',
    });

    // Set the JWT token as a cookie
    res.cookie('token', token, { httpOnly: true });

    // Exclude the password field from the user object
    const { password: excludedPassword, ...userData } = user;

    return res
      .status(200)
      .json({ message: 'User logged in successfully', token, user: userData });
  } catch (error) {
    return next(error);
  }
};

// Get user by ID
export const getUserById = async (req, res, next) => {
  try {
    const [userId] = req.params.userId;
    // Retrieve the user data from the database based on the user ID
    const user = await pool.query('SELECT * FROM users WHERE id = ?', [userId]);

    // Check if the user exists
    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user data
    const { password, ...userData } = user[0];
    return res.status(200).json(userData);
  } catch (error) {
    return next(error);
  }
};

export const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Remove "Bearer " from the token string
    const tokenString = token.replace('Bearer ', '');

    jwt.verify(tokenString, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
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
  res.clearCookie('token');

  return res.status(200).json({ message: 'Logout successful' });
};
