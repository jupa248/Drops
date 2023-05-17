import { pool } from "../db-config.js";
import { authenticate } from "./users.js";

// Create a note
export const createNote = async (req, res, next) => {
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

    return res.status(201).json({ message: "Note created successfully" });
  } catch (error) {
    return next(error);
  }
};

// Get all notes for the authenticated user
export const getAllNotes = async (req, res, next) => {
  try {
    const userId = req.userId; // Get the authenticated user's ID from the request object

    // Retrieve all notes for the user from the database
    const [notes] = await pool.query("SELECT * FROM notes WHERE user_id = ?", [
      userId,
    ]);

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
      ],
      (err, result) => {
        if (err) {
          console.log("1", err); // Log any errors encountered during the update query
          return res.status(500).json({ message: "Error updating note" });
        }
        console.log("result", result); // Log the result of the update query for debugging purposes
        return res.status(200).json({ message: "Note updated successfully" });
      }
    );
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
