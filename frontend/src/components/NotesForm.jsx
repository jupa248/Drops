import "./NotesForm.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { toast } from "react-toastify";
import SaveNoteBtn from "./SaveNoteBtn";

const NotesForm = () => {
  const { user, createNote, error } = useAppContext();
  const [notes, setNotes] = useState([]);
  const nameInput = document.querySelector('input[name="wine"]')?.value;
  const priceInput = document.querySelector('input[name="price"]')?.value;

  const navigate = useNavigate();

  const userId = user?.id;
  console.log(error);
  const handleChange = (event) => {
    const { value, name } = event.target;
    setNotes({ ...notes, [name]: value });
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const result = await createNote(userId, notes);
      console.log(result);
      if (result.success) {
        toast.success(result.message);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="notes-container">
      <form onSubmit={handleSubmission}>
        <label>Wine</label>
        <input name="wine" required type="text" onChange={handleChange} />
        {error && nameInput?.length === 0 && (
          <span className="required">
            <p className="err-tooltip">* Wine name field is required</p>
          </span>
        )}
        <label>Date</label>
        <input name="date" type="date" onChange={handleChange} />
        <label>Price €€€</label>
        <input
          name="price"
          type="number"
          step={0.1}
          min={0}
          onChange={handleChange}
        />
        {error && priceInput?.length === 0 && (
          <span className="required">
            <p className="err-tooltip">* Wine price field is required</p>
          </span>
        )}
        <label>Year</label>
        <input
          name="year"
          type="number"
          min={1920}
          placeholder="YYYY"
          onChange={handleChange}
        />
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
        <textarea
          name="mynotes"
          type="text"
          maxLength={255}
          onChange={handleChange}
        />
      </form>
      <div className="save-btn">
        <SaveNoteBtn handleSubmit={handleSubmission} />
      </div>
    </div>
  );
};
export default NotesForm;
