import "./NotesForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

const NotesForm = () => {
  const { user } = useAppContext();
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const userId = user?.id;

  console.log("userId", userId);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNotes({ ...notes, [name]: value });
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    axios
      .post(`/notes/${userId}`, notes)
      .then((response) => {
        alert("Note has been registered");
        navigate("/home");
      })
      .catch((error) => {
        alert(error);
      });
  };
  console.log("notes", notes);

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
};
export default NotesForm;
