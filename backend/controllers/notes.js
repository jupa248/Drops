import { pool } from '../db-config.js';

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
      clarity,
      intensity,
      color$,
      condition$,
      intensity$,
      aroma$characteristics,
      development,
      sweetness,
      acidity,
      tannin,
      alcohol,
      body$,
      flavour$intensity,
      flavour$characteristics,
      finish$,
      quality$level,
      color$Rate,
      aroma$Rate,
      body$Rate,
      taste$Rate,
      finish$Rate,
    } = req.body;

    const userId = req.params.userId;

    const result = await pool.query(
      `INSERT INTO notes (wine, date, price, year, variety, winery, region, color, aroma, body, taste, finish, mynotes, user_id, clarity, intensity, color$, condition$, intensity$, aroma$characteristics, development, sweetness, acidity, tannin, alcohol, body$, flavour$intensity, flavour$characteristics, finish$, quality$level, color$Rate, aroma$Rate, body$Rate, taste$Rate, finish$Rate) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?)`,
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
        clarity,
        intensity,
        color$,
        condition$,
        intensity$,
        aroma$characteristics,
        development,
        sweetness,
        acidity,
        tannin,
        alcohol,
        body$,
        flavour$intensity,
        flavour$characteristics,
        finish$,
        quality$level,
        color$Rate,
        aroma$Rate,
        body$Rate,
        taste$Rate,
        finish$Rate,
      ],
    );

    if (result[0].affectedRows === 1) {
      const updatedNotes = await pool.query(
        'SELECT * FROM notes WHERE user_id = ?',
        [userId],
      );

      return res.status(201).json({
        message: 'Note created successfully',
        notes: updatedNotes,
      });
    } else {
      throw new Error('Failed to create the note');
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get all notes for the authenticated user
export const getAllNotes = async (req, res, next) => {
  try {
    const userId = req.params.userId; // Get the userId from the route parameters

    // Retrieve all notes for the user from the database
    const [notes] = await pool.query('SELECT * FROM notes WHERE user_id = ?', [
      userId,
    ]);
    // Check if the user has any notes
    if (notes.length === 0) {
      return res.status(404).json({ message: 'No notes found for this user' });
    }

    return res.status(200).json(notes);
  } catch (error) {
    return next(error);
  }
};

// Get note by ID
export const getNoteById = async (req, res, next) => {
  try {
    const noteId = req.params.noteId;

    const note = await pool.query('SELECT * FROM notes WHERE note_id = ?', [
      noteId,
    ]);

    if (note.length === 0) {
      return res.status(404).json({ message: 'Note not found' });
    }

    return res.status(200).json(note[0]);
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
      clarity,
      intensity,
      color$,
      condition$,
      intensity$,
      aroma$characteristics,
      development,
      sweetness,
      acidity,
      tannin,
      alcohol,
      body$,
      flavour$intensity,
      flavour$characteristics,
      finish$,
      quality$level,
      color$Rate,
      aroma$Rate,
      body$Rate,
      taste$Rate,
      finish$Rate,
    } = req.body;
    const userId = req.userId; // Get the authenticated user's ID from the request object

    const [existingNote] = await pool.query(
      'SELECT * FROM notes WHERE note_id = ? AND user_id = ?',
      [noteId, userId],
    );

    if (existingNote.length === 0) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Update the note in the database
    await pool.query(
      'UPDATE notes SET wine = ?, date = ?, price = ?, year = ?, variety = ?, winery = ?, region = ?, color = ?, aroma = ?, body = ?, taste = ?, finish = ?, mynotes = ?, clarity = ?, intensity = ?, color$ = ?, condition$ = ?, intensity$ = ?, aroma$characteristics = ?, development = ?, sweetness = ?, acidity = ?, tannin = ?, alcohol = ?, body$ = ?, flavour$intensity = ?, flavour$characteristics = ?, finish$ = ?, quality$level = ?, color$Rate = ?, aroma$Rate = ?, body$Rate = ?, taste$Rate = ?, finish$Rate = ? WHERE note_id = ?',
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
        clarity,
        intensity,
        color$,
        condition$,
        intensity$,
        aroma$characteristics,
        development,
        sweetness,
        acidity,
        tannin,
        alcohol,
        body$,
        flavour$intensity,
        flavour$characteristics,
        finish$,
        quality$level,
        color$Rate,
        aroma$Rate,
        body$Rate,
        taste$Rate,
        finish$Rate,
        noteId,
      ],
    );

    return res.status(200).json({ message: 'Note updated successfully' });
  } catch (error) {
    console.error(error);
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
      'SELECT * FROM notes WHERE note_id = ? AND user_id = ?',
      [noteId, userId],
    );

    if (existingNote.length === 0) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Delete the note from the database
    await pool.query('DELETE FROM notes WHERE note_id = ?', [noteId]);

    return res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    return next(error);
  }
};
