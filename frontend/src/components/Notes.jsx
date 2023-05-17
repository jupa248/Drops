import React, { useState, useContext } from "react";
import "./Notes.css";
import { wines } from "../utils/wines";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Notes() {
  const [notes, setNotes] = useState([]);
  const { auth, user } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log("user:", user.id);
  console.log("auth:", auth);
  const handleChange = (event) => {
    const { value, name } = event.target;
    setNotes({ ...notes, [name]: value, user_id: user.id });
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    axios
      .post("/notes/notes-insert", [notes])
      .then((response) => {
        alert("Note has been registered");
        console.log(notes);
        navigate("/homepage");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="notes-container">
      <form onSubmit={handleSubmission}>
        <label>Wine</label>
        <input name="wine" type="text" onChange={handleChange} />
        <label>Date</label>
        <input name="date" type="date" onChange={handleChange} />
        <label>Price €€€</label>
        <input name="price" type="number" onChange={handleChange} />
        <label>Year</label>
        <input name="year" type="number" onChange={handleChange} />
        <label>Variety</label>
        <input name="variety" type="text" onChange={handleChange} />
        <label>Winery</label>
        <input name="winery" type="text" onChange={handleChange} />
        <label>Region/Country</label>
        <input name="region" type="text" onChange={handleChange} />
        <label>Color/Clarity</label>
        <input name="color" type="text" onChange={handleChange} />
        <label>Aroma</label>
        <input name="aroma" type="text" onChange={handleChange} />
        <label>Body</label>
        <input name="body" type="text" onChange={handleChange} />
        <label>Taste</label>
        <input name="taste" type="text" onChange={handleChange} />
        <label>Finish</label>
        <input name="finish" type="text" onChange={handleChange} />
        <label>Description</label>
        <textarea name="mynotes" type="text" onChange={handleChange} />
        <button type="submit" className="notes-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default Notes;
