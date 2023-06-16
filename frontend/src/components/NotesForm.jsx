import "./NotesForm.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { toast } from "react-toastify";
import SaveNoteBtn from "./buttons/SaveNoteBtn";
import RatingInput from "./utils/RatingInput";
import AdvancedNotes from "./utils/AdvancedNotes";
import { advProps } from "../assets/data/formData.js";
import { MdArrowDropDown } from "react-icons/md";

const NotesForm = () => {
  const { user, createNote, error } = useAppContext();
  const [notes, setNotes] = useState({});
  const [toggleAdvanced, setToggleAdvanced] = useState(false);
  const nameInput = document.querySelector('input[name="wine"]')?.value;
  const priceInput = document.querySelector('input[name="price"]')?.value;

  const navigate = useNavigate();

  const userId = user?.id;

  const ratingProps = [
    "color$Rate",
    "aroma$Rate",
    "body$Rate",
    "taste$Rate",
    "finish$Rate",
  ];

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNotes({ ...notes, [name]: value });
    console.log(notes);
  };

  const handleDropdownChange = (title, option) => {
    setNotes((prevNotes) => ({ ...prevNotes, [title]: option }));
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

  const handleToggleAdv = () => {
    setToggleAdvanced(!toggleAdvanced);
    console.log(toggleAdvanced);
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
        <hr className="rates-line" />
        <div className="rates">
          <h3>Rates:</h3>
          {ratingProps.map((rate, index) => (
            <RatingInput
              key={index}
              wineProperty={rate}
              handleChange={handleChange}
            />
          ))}
        </div>
        <div className="expand-adv-notes">
          <p>Advanced Notes</p>
          <button type="button" onClick={handleToggleAdv}>
            <MdArrowDropDown />
          </button>
        </div>
        {toggleAdvanced && (
          <div className="advanced-notes">
            <AdvancedNotes
              formData={advProps}
              handleDropdownChange={handleDropdownChange}
            />
          </div>
        )}

        <label>Notes/Description</label>
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
