import express from 'express';
import cookieParser from 'cookie-parser';
import {
  register,
  login,
  logout,
  authenticate,
  getUserById,
} from '../controllers/users.js';
import {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote,
  getNoteById,
} from '../controllers/notes.js';

const router = express.Router();

router.use(cookieParser());

router.post('/register', register);

router.post('/login', login);
router.get('/users/:userId', authenticate, getUserById);

router.post('/logout', authenticate, logout);

router.get('/protected', authenticate, (req, res) => {
  return res.status(200).json({ message: 'Protected route accessed' });
});

router.post('/notes/:userId', authenticate, createNote);

router.get('/notes/:userId', authenticate, getAllNotes);
router.get('/note/:noteId', authenticate, getNoteById);

router.put('/notes/:noteId', authenticate, updateNote);

router.delete('/notes/:noteId', authenticate, deleteNote);

export default router;
