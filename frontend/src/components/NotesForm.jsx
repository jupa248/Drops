import "./NotesForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { toast } from "react-toastify";
import NotesActions from "./NotesActions";
import SaveNoteBtn from "./SaveNoteBtn";

const NotesForm = () => {
  const { user, createNote } = useAppContext();
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const userId = user?.id;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNotes({ ...notes, [name]: value });
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    await createNote(userId, notes);
    navigate("/home");
    toast.success("Note has been registered");
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
        {/* <button type="submit" className="notes-button">
          Save
        </button> */}
      </form>
      <div className="save-btn">
        <SaveNoteBtn handleSubmit={handleSubmission} />
      </div>
    </div>
  );
};
export default NotesForm;
