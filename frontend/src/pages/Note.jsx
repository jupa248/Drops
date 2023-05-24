import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import note from "../assets/note.svg";
import EditInput from "../components/EditInput";
import "./Note.css";
import { useEffect, useState } from "react";

const Note = () => {
  const { getNote } = useAppContext();
  const [myNote, setMyNote] = useState("");
  const [activeField, setActiveField] = useState("");

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
    setMyNote((prevNote) => ({
      ...prevNote,
      [fieldName]: value,
    }));
  };

  const handleEditClick = (fieldName) => {
    setActiveField(fieldName);
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
              const isFocused = activeField === fieldName;

              return (
                <EditInput
                  key={fieldName}
                  label={fieldName}
                  value={fieldValue}
                  onChange={(e) => handleInputChange(fieldName, e.target.value)}
                  focused={isFocused}
                  onEditClick={() => handleEditClick(fieldName)}
                />
              );
            })}
        </form>
        <div className="see-all">
          <div>
            <Link to="/create-notes">
              <button className="create-note-button">
                <img src={note} alt="" />
              </button>
            </Link>
          </div>
          <div>
            <Link to="/my-notes">
              <button className="see-all-button">My notes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
