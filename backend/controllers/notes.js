import { pool } from "../db-config.js";
import { authenticate } from "./users.js";

// Create a note
export const createNote = async (req, res, next) => {
  console.log("hola req be:", req.body);
  try {
    const {
      wine,
      date,
      price,
      year,
      variety,
      winery,
      region,
      color,
      aroma,
      body,
      taste,
      finish,
      mynotes,
    } = req.body;
    const userId = req.params.userId; // Get the authenticated user's ID from the request object
    console.log("userId be", userId);
    // Insert the new note into the database
    await pool.query(
      "INSERT INTO notes (wine, date, price, year, variety, winery, region, color, aroma, body, taste, finish, mynotes, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        wine,
        date,
        price,
        year,
        variety,
        winery,
        region,
        color,
        aroma,
        body,
        taste,
        finish,
        mynotes,
        userId,
      ]
    );
    console.log("res be", res);
    return res.status(201).json({ message: "Note created successfully" });
  } catch (error) {
    return next(error);
  }
};

// Get all notes for the authenticated user
export const getAllNotes = async (req, res, next) => {
  try {
    const userId = req.params.userId; // Get the userId from the route parameters

    // Retrieve all notes for the user from the database
    const [notes] = await pool.query("SELECT * FROM notes WHERE user_id = ?", [
      userId,
    ]);
    // Check if the user has any notes
    if (notes.length === 0) {
      return res.status(404).json({ message: "No notes found for this user" });
    }

    //console.log("notes be:", notes);
    return res.status(200).json(notes);
  } catch (error) {
    return next(error);
  }
};

export const updateNote = async (req, res, next) => {
  const noteId = req.params.noteId;
  try {
    const {
      wine,
      date,
      price,
      year,
      variety,
      winery,
      region,
      color,
      aroma,
      body,
      taste,
      finish,
      mynotes,
    } = req.body;
    const userId = req.userId; // Get the authenticated user's ID from the request object

    // Check if the note belongs to the authenticated user
    console.log(
      "SQL Query:",
      "SELECT * FROM notes WHERE note_id = ? AND user_id = ?",
      [noteId, userId]
    );

    const [existingNote] = await pool.query(
      "SELECT * FROM notes WHERE note_id = ? AND user_id = ?",
      [noteId, userId]
    );

    console.log("existing", existingNote); // Log the existing note for debugging purposes

    if (existingNote.length === 0) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Update the note in the database
    await pool.query(
      "UPDATE notes SET wine = ?, date = ?, price = ?, year = ?, variety = ?, winery = ?, region = ?, color = ?, aroma = ?, body = ?, taste = ?, finish = ?, mynotes = ? WHERE note_id = ?",
      [
        wine,
        date,
        price,
        year,
        variety,
        winery,
        region,
        color,
        aroma,
        body,
        taste,
        finish,
        mynotes,
        noteId,
      ]
    );

    console.log("Note updated successfully");
    return res.status(200).json({ message: "Note updated successfully" });
  } catch (error) {
    return next(error);
  }
};

// Delete a note
export const deleteNote = async (req, res, next) => {
  try {
    const noteId = req.params.noteId;
    const userId = req.userId; // Get the authenticated user's ID from the request object

    // Check if the note belongs to the authenticated user
    const [existingNote] = await pool.query(
      "SELECT * FROM notes WHERE note_id = ? AND user_id = ?",
      [noteId, userId]
    );

    if (existingNote.length === 0) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Delete the note from the database
    await pool.query("DELETE FROM notes WHERE note_id = ?", [noteId]);

    return res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    return next(error);
  }
};
