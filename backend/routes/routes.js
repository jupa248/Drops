import express from "express";
import cookieParser from "cookie-parser";
import {
  register,
  login,
  logout,
  authenticate,
  getUserById,
} from "../controllers/users.js";
import {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote,
} from "../controllers/notes.js";

const router = express.Router();

// Parse cookies
router.use(cookieParser());

// User registration route
router.post("/register", register);

// User login route
router.post("/login", login);
router.get("/users/:userId", getUserById);

router.post("/logout", logout);

// Protected route (requires authentication)
router.get("/protected", authenticate, (req, res) => {
  return res.status(200).json({ message: "Protected route accessed" });
});

// Create a new note
router.post("/notes/:userId", createNote);

// Get all notes for the authenticated user
router.get("/notes/:userId", getAllNotes);

// Update a note
router.put("/notes/:noteId", authenticate, updateNote);

// Delete a note
router.delete("/notes/:noteId", authenticate, deleteNote);

export default router;
