const connection = require("../config");
const db = connection.promise();

const findAllnotes = () => {
  let sql = "SELECT * FROM notes";
  return db.query(sql).then(([results]) => results);
};

const createNotes = (data) => {
  return db.query("INSERT INTO notes SET ?", data).then(([result]) => {
    const id = result.insertId;
    return { ...data, id };
  });
};



module.exports = { findAllnotes, createNotes };
