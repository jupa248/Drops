const connection = require("../config");
const db = connection.promise();

const findAllnotes = () => {
  let sql = "SELECT * FROM notes";
  return db.query(sql).then(([results]) => results);
};

const getNote = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM notes WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createNotes = (data) => {
  return db.query("INSERT INTO notes SET ?", data).then(([result]) => {
    const id = result.insertId;
    return { ...data, id };
  });
};

module.exports = { findAllnotes, getNote, createNotes };
