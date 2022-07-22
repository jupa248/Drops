const router = require("express").Router();
const Notes = require("../models/notes");

router.get("/notes", (req, res) => {
  Notes.findAllnotes()
    .then((results) => {
      res.json(results);
      
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving notes from database");
    });
});

router.post("/notes-insert", (req, res) => {
  Notes.createNotes(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving Notes to database");
    });
});



module.exports = router;
