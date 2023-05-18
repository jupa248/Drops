import express from "express";
import cookieParser from "cookie-parser";
import { register, login, logout, authenticate } from "../controllers/users.js";
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

router.post("/logout", authenticate, logout);

// Protected route (requires authentication)
router.get("/protected", authenticate, (req, res) => {
  return res.status(200).json({ message: "Protected route accessed" });
});

// Create a new note
router.post("/notes", authenticate, createNote);

// Get all notes for the authenticated user
router.get("/notes", authenticate, getAllNotes);

// Update a note
router.put("/notes/:noteId", authenticate, updateNote);

// Delete a note
router.delete("/notes/:noteId", authenticate, deleteNote);

export default router;
