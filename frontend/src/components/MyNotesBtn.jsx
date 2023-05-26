import { Link } from "react-router-dom";
import "./NotesActions.css";
import myNotesIcon from "../assets/myNotesIcon.svg";

const MyNotesBtn = () => {
  return (
    <>
      <Link to="/my-notes">
        <button className="icon-notes">
          <img src={myNotesIcon} alt="my-notes-icon" />
          <span>My Notes</span>
        </button>
      </Link>
    </>
  );
};
export default MyNotesBtn;
