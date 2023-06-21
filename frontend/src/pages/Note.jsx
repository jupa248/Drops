import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import EditInput from '../components/EditInput';
import './Note.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import NewNoteBtn from '../components/buttons/NewNoteBtn';
import MyNotesBtn from '../components/buttons/MyNotesBtn';
import SaveNoteBtn from '../components/buttons/SaveNoteBtn';
import CancelBtn from '../components/buttons/CancelBtn';
import DeleteNoteBtn from '../components/buttons/DeleteNoteBtn';
import RatingInput from '../components/utils/RatingInput';
import { BsDropletFill } from 'react-icons/bs';
import { EditIcon } from '../assets/svgIcons';
import { BiArrowBack } from 'react-icons/bi';

const Note = () => {
  const { getNote, updateNotes, deleteNote } = useAppContext();
  const [myNote, setMyNote] = useState('');
  const [inputChanged, setInputChanged] = useState(false);
  const [cancelEdit, setCancelEdit] = useState(false);
  const [editRates, setEditRates] = useState(false);
  const navigate = useNavigate();

  let param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNote(param.id);
        setMyNote(response[0]);
      } catch (error) {
        toast.error(error);
        console.error(error);
      }
    };

    fetchData();
  }, [cancelEdit]);

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
    console.log('myNote', myNote);
    const noteId = myNote.note_id;
    await updateNotes(noteId, myNote);
    setInputChanged(false);
    toast.success('Note updated!');
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

  const editInputProps = [
    'date',
    'price',
    'year',
    'variety',
    'winery',
    'region',
    'color',
    'aroma',
    'body',
    'taste',
    'finish',
    'mynotes',
  ];

  const ratingProps = [
    'aroma$Rate',
    'body$Rate',
    'color$Rate',
    'taste$Rate',
    'finish$Rate',
  ];

  // console.log(myNote);

  return (
    <section className="note-page">
      <form className="myNotes-container">
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
        <hr className="rates-hr" />

        {Object.entries(myNote)
          .filter(([fieldName, fieldValue]) => ratingProps.includes(fieldName))
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
                  {<BsDropletFill />}
                </p>
              </article>
            ),
          )}

        <button
          type="button"
          onClick={handleEditRates}
          className="edit-rates-btn"
        >
          {!editRates ? 'Edit Rates' : <BiArrowBack />}
          {!editRates ? <EditIcon /> : ''}
        </button>
      </form>
      <div className="notes-actions">
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

/*
 {Object.entries(myNote)
          // .filter(([fieldName, fieldValue]) =>
          //   editInputProps.includes(fieldName),
          // )
          .map(([fieldName, fieldValue, index]) => {
            return (
              <div key={fieldName}>
                {editInputProps.includes(fieldName) && (
                  <EditInput
                    key={fieldName}
                    label={fieldName}
                    type={fieldName === 'date' ? 'date' : 'text'}
                    value={fieldValue || ''}
                    onChange={(e) =>
                      handleInputChange(fieldName, e.target.value)
                    }
                  />
                )}

                {ratingProps.includes(fieldName) && editRates && (
                  <RatingInput
                    key={fieldName}
                    wineProperty={fieldName}
                    handleChange={handleInputChange}
                    currentRate={fieldValue || ''}
                  />
                )}
                {console.log('index', index)}
                {ratingProps.includes(fieldName) && !editRates && (
                  <article className="note-ratings">
                    <h4>{fieldName.replace('$Rate', '')}</h4>
                    <p>
                      {fieldValue}
                      {<BsDropletFill />}
                    </p>
                  </article>
                )}
              </div>
            );
          })}
*/
