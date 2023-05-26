import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import note from "../assets/note.svg";
import barrel from "../assets/barrel.svg";
import myNotesIcon from "../assets/myNotesIcon.svg";
import EditInput from "../components/EditInput";
import "./Note.css";
import { useEffect, useState } from "react";
import NotesActions from "../components/NotesActions";
import { ToastContainer, toast } from "react-toastify";
import NewNoteBtn from "../components/NewNoteBtn";
import MyNotesBtn from "../components/MyNotesBtn";
import SaveNoteBtn from "../components/SaveNoteBtn";
import CancelBtn from "../components/CancelBtn";
import DeleteNoteBtn from "../components/DeleteNoteBtn";

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
    navigate("/home");
    toast.success("Note has been deleted");
  };

  const includedProperties = [
    "wine",
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
    <section className="singleNotesPage">
      <form className="myNotes-container">
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
      {/* <NotesActions
        inputChanged={inputChanged}
        handleSubmit={handleEditSubmit}
        handleCancel={handleCancelEdit}
        handleDelete={handleDelete}
      /> */}
      <ToastContainer />
    </section>
  );
};

export default Note;
