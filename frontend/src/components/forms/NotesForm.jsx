import './NotesForm.css';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { toast } from 'react-toastify';
import SaveNoteBtn from '../buttons/SaveNoteBtn';
import RatingInput from '../inputs/RatingInput';
import AdvancedNotes from '../forms/AdvancedNotes';
import { advProps, ratingProps } from '../../assets/data/formData';
import { MdExpandMore } from 'react-icons/md';
import { MdExpandLess } from 'react-icons/md';
import { BsArrowUp } from 'react-icons/bs';
import CancelBtn from '../buttons/CancelBtn';

const NotesForm = () => {
  const { user, createNote, error } = useAppContext();
  const [notes, setNotes] = useState({});
  const [toggleAdvanced, setToggleAdvanced] = useState(false);
  const [inputChanged, setInputChanged] = useState(false);
  const [cancelEdit, setCancelEdit] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);
  const nameInput = document.querySelector('input[name="wine"]')?.value;

  const formRef = useRef(null);

  const navigate = useNavigate();

  const userId = user?.id;

  const handleChange = (e) => {
    setInputChanged(true);
    const { value, name } = e.target;
    setNotes({ ...notes, [name]: value });
  };

  const handleDropdownChange = (title, option) => {
    setNotes((prevNotes) => ({ ...prevNotes, [title]: option }));
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const result = await createNote(userId, notes);
      if (result.success) {
        toast.success(result.message);
        navigate('/home');
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleCancelEdit = () => {
    setCancelEdit(!cancelEdit);
    setNotes({});
    setInputChanged(false);
    formRef.current.reset();
  };

  const handleToggleAdv = () => {
    setToggleAdvanced(!toggleAdvanced);
  };

  const scrollPosition = () => {
    if (window.scrollY > 150) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
  };
  window.addEventListener('scroll', scrollPosition);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="notes-container">
      <form ref={formRef} onSubmit={handleSubmission}>
        <label>Wine</label>
        <input name="wine" required type="text" onChange={handleChange} />
        {error && nameInput?.length === 0 && (
          <span className="required">
            <p className="err-tooltip">* Wine field is required</p>
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
          <button type="button" onClick={handleToggleAdv}>
            Advanced Notes{' '}
            {!toggleAdvanced ? <MdExpandMore /> : <MdExpandLess />}
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
      {inputChanged && (
        <div className="notes-form-actions">
          <div className="save-btn">
            <SaveNoteBtn handleSubmit={handleSubmission} />
          </div>
          <div className="save-btn">
            <CancelBtn handleCancel={handleCancelEdit} />
          </div>
        </div>
      )}
      {scrollUp && (
        <button
          type="button"
          onClick={handleGoToTop}
          className="back-to-top-btn notes-form-to-top-btn"
        >
          <BsArrowUp />
        </button>
      )}
    </div>
  );
};
export default NotesForm;
