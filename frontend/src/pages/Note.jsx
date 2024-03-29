import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import EditInput from '../components/inputs/EditInput';
import './Note.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import NewNoteBtn from '../components/buttons/NewNoteBtn';
import MyNotesBtn from '../components/buttons/MyNotesBtn';
import SaveNoteBtn from '../components/buttons/SaveNoteBtn';
import CancelBtn from '../components/buttons/CancelBtn';
import DeleteNoteBtn from '../components/buttons/DeleteNoteBtn';
import RatingInput from '../components/inputs/RatingInput';
import { BsDropletFill } from 'react-icons/bs';
import { EditIcon } from '../assets/images/svgIcons';
import { BiArrowBack } from 'react-icons/bi';
import { MdExpandMore } from 'react-icons/md';
import { MdExpandLess } from 'react-icons/md';
import {
  advProps,
  editInputProps,
  ratingProps,
  advNotesProps,
} from '../assets/data/formData';
import AdvancedNotes from '../components/forms/AdvancedNotes';
import Spinner from '../components/UI/Spinner';

const Note = () => {
  const { getNote, updateNotes, deleteNote } = useAppContext();
  const [loading, setLoading] = useState();
  const [myNote, setMyNote] = useState('');
  const [inputChanged, setInputChanged] = useState(false);
  const [cancelEdit, setCancelEdit] = useState(false);
  const [editRates, setEditRates] = useState(false);
  const [editAdvNotes, setEditAdvNotes] = useState(false);
  const [toggleAdvanced, setToggleAdvanced] = useState(false);
  const navigate = useNavigate();

  let param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getNote(param.id);
        setMyNote(response[0]);
        setLoading(false);
      } catch (error) {
        toast.error(error);
        console.error(error);
      }
    };

    fetchData();
  }, [cancelEdit, getNote, param.id]);

  const handleInputChange = (fieldName, value) => {
    setInputChanged(true);
    setMyNote((prevNote) => ({
      ...prevNote,
      [fieldName]: value,
    }));
  };

  const handleRatingChange = (e) => {
    setInputChanged(true);
    const { value, name } = e.target;
    setMyNote({ ...myNote, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const noteId = myNote.note_id;
    await updateNotes(noteId, myNote);
    setInputChanged(false);
    toast.success('Note has been updated!');
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

  const handleCancelEdit = () => {
    setCancelEdit(!cancelEdit);
    setInputChanged(false);
  };

  const handleDelete = async () => {
    const noteId = myNote.note_id;
    await deleteNote(noteId);

    toast.success('Note has been deleted');
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

  const handleEditRates = () => {
    setEditRates(!editRates);
  };
  const handleEditAdvNotes = () => {
    setEditAdvNotes(!editAdvNotes);
  };

  const handleToggleAdv = () => {
    setToggleAdvanced(!toggleAdvanced);
  };

  const handleDropdownChange = (title, option) => {
    setInputChanged(true);
    setMyNote((prevNotes) => ({ ...prevNotes, [title]: option }));
    console.log('myNote', myNote);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="note-page">
      <form className="myNotes-container">
        <div className="form-sections">
          <div className="form-section">
            <h2>{myNote.wine}</h2>
            {Object.entries(myNote)
              .filter(([fieldName, fieldValue]) =>
                editInputProps.includes(fieldName),
              )
              .map(([fieldName, fieldValue, index]) => (
                <EditInput
                  key={fieldName}
                  label={fieldName}
                  type={fieldName === 'date' ? 'date' : 'text'}
                  value={fieldValue || ''}
                  onChange={(e) => handleInputChange(fieldName, e.target.value)}
                />
              ))}
          </div>
          <div className="form-section">
            <h3>Ratings:</h3>
            {Object.entries(myNote)
              .filter(([fieldName, fieldValue]) =>
                ratingProps.includes(fieldName),
              )
              .map(([fieldName, fieldValue, index]) =>
                editRates ? (
                  <RatingInput
                    key={fieldName}
                    wineProperty={fieldName}
                    handleChange={handleRatingChange}
                    currentRate={fieldValue || ''}
                  />
                ) : (
                  <article className="note-ratings" key={fieldName}>
                    <h4>{fieldName.replace('$Rate', '')}</h4>
                    <p>
                      {fieldValue}
                      {fieldValue > 0 && <BsDropletFill />}
                    </p>
                  </article>
                ),
              )}

            <button
              type="button"
              onClick={handleEditRates}
              className="edit-btn"
            >
              {!editRates ? 'Edit Rates' : <BiArrowBack />}
              {!editRates ? <EditIcon /> : ''}
            </button>
            <button
              type="button"
              onClick={handleToggleAdv}
              className="adv-notes-btn"
            >
              Advanced Notes{' '}
              {!toggleAdvanced ? <MdExpandMore /> : <MdExpandLess />}
            </button>
          </div>

          <div className={!editAdvNotes ? 'form-section' : 'edit-adv'}>
            <section className={!editAdvNotes ? 'adv-notes-section' : 'none'}>
              {toggleAdvanced &&
                !editAdvNotes &&
                Object.entries(myNote)
                  .filter(([fieldName, fieldValue]) =>
                    advNotesProps.includes(fieldName),
                  )
                  .map(([fieldName, fieldValue]) => (
                    <article key={fieldName} className="adv-notes-article">
                      <h4>{fieldName.replace('$', ' ')}</h4>
                      <p>{fieldValue || '...'}</p>
                    </article>
                  ))}
              {toggleAdvanced && !editAdvNotes && (
                <button
                  type="button"
                  onClick={handleEditAdvNotes}
                  className="edit-btn"
                >
                  {!editAdvNotes ? 'Edit Advanced Notes' : <BiArrowBack />}
                  {!editAdvNotes ? <EditIcon /> : ''}
                </button>
              )}
            </section>
            {editAdvNotes && toggleAdvanced && (
              <AdvancedNotes
                formData={advProps}
                handleDropdownChange={handleDropdownChange}
              />
            )}
            {toggleAdvanced && editAdvNotes && (
              <button
                type="button"
                onClick={handleEditAdvNotes}
                className="edit-btn"
              >
                {!editAdvNotes ? 'Edit Advanced Notes' : <BiArrowBack />}
                {!editAdvNotes ? <EditIcon /> : ''}
              </button>
            )}
          </div>
        </div>
      </form>
      <div className="note-page-actions">
        {!inputChanged && <NewNoteBtn />}
        {!inputChanged && <MyNotesBtn />}
        {inputChanged && <CancelBtn handleCancel={handleCancelEdit} />}
        {inputChanged && <SaveNoteBtn handleSubmit={handleEditSubmit} />}
        <DeleteNoteBtn handleDelete={handleDelete} />
      </div>
    </section>
  );
};

export default Note;
