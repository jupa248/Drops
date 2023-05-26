import { Link } from "react-router-dom";
import "./NotesActions.css";
import note from "../assets/note.svg";

const NewNoteBtn = () => {
  return (
    <>
      <Link to="/create-notes">
        <button className="icon-notes">
          <img src={note} alt="" />
          <span>New Note</span>
        </button>
      </Link>
    </>
  );
};
export default NewNoteBtn;
