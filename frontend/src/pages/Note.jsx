import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import EditInput from "../components/EditInput";
import "./Note.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NewNoteBtn from "../components/buttons/NewNoteBtn";
import MyNotesBtn from "../components/buttons/MyNotesBtn";
import SaveNoteBtn from "../components/buttons/SaveNoteBtn";
import CancelBtn from "../components/buttons/CancelBtn";
import DeleteNoteBtn from "../components/buttons/DeleteNoteBtn";

const Note = () => {
  const { getNote, updateNotes, deleteNote } = useAppContext();
  const [myNote, setMyNote] = useState("");
  const [inputChanged, setInputChanged] = useState(false);
  const [cancelEdit, setCancelEdit] = useState(false);
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

    console.log(myNote);
    fetchData();
  }, [cancelEdit]);

  const handleInputChange = (fieldName, value) => {
    setInputChanged(true);
    setMyNote((prevNote) => ({
      ...prevNote,
      [fieldName]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const noteId = myNote.note_id;
    await updateNotes(noteId, myNote);
    setInputChanged(false);
    toast.success("Note updated!");
  };

  const handleCancelEdit = () => {
    setCancelEdit(!cancelEdit);
    setInputChanged(false);
  };

  const handleDelete = async () => {
    const noteId = myNote.note_id;
    await deleteNote(noteId);

    toast.success("Note has been deleted");
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  const includedProperties = [
    "date",
    "price",
    "year",
    "variety",
    "winery",
    "region",
    "color",
    "aroma",
    "body",
    "taste",
    "finish",
    "mynotes",
  ];

  return (
    <section className="note-page">
      <form className="myNotes-container">
        <h2>{myNote.wine}</h2>
        {Object.entries(myNote)
          .filter(([fieldName, fieldValue]) =>
            includedProperties.includes(fieldName)
          )
          .map(([fieldName, fieldValue]) => {
            return (
              <EditInput
                key={fieldName}
                label={fieldName}
                type={fieldName === "date" ? "date" : "text"}
                value={fieldValue || ""}
                onChange={(e) => handleInputChange(fieldName, e.target.value)}
              />
            );
          })}
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
