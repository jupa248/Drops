const express = require("express");
const app = express();
const connection = require("./config");
const authRouter = require("./routes/auth");
const passwordRouter = require("./routes/passwordManagement");
const notesRouter = require("./routes/notes")
// const notesCreateRouter = require("./routes/notes-create")

const port = process.env.PORT || 5001;

connection.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to the database");
});

app.use(express.json());

app.use("/auth", authRouter);
app.use("/password", passwordRouter);
app.use("/notes", notesRouter);
// app.use("/notes-create", notesCreateRouter);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`App is listening at ${port}`);
});
