import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { BarrelIcon } from "../assets/svgIcons";
import note from "../assets/note.svg";
import barrel from "../assets/barrel.svg";
import myNotesIcon from "../assets/myNotesIcon.svg";
import EditInput from "../components/EditInput";
import "./Note.css";
import { useEffect, useState } from "react";

const Note = () => {
  const { getNote, updateNotes } = useAppContext();
  const [myNote, setMyNote] = useState("");
  const [inputChanged, setInputChanged] = useState(false);

  let param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNote(param.id);
        setMyNote(response[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
    <div className="singleNotesPage">
      <div className="single-container">
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
        <div className="see-all">
          <div>
            <Link to="/create-notes">
              <button className="icon-notes">
                <img src={note} alt="" />
                <span>New Note</span>
              </button>
            </Link>
          </div>
          <div>
            <Link to="/my-notes">
              <button className="icon-notes">
                <img src={myNotesIcon} alt="my-notes-icon" />
                <span>My Notes</span>
              </button>
            </Link>
          </div>
          {inputChanged && (
            <button
              className="icon-barrel icon"
              type="submit"
              onClick={handleEditSubmit}
            >
              <img src={barrel} alt="barrel" />
              <span>Save</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
