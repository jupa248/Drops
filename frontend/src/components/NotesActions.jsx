import { Link } from "react-router-dom";
import "./NotesActions.css";
import note from "../assets/note.svg";
import barrel from "../assets/barrel.svg";
import trashCan from "../assets/trashCan.svg";
import cancelIcon from "../assets/cancelIcon.svg";
import myNotesIcon from "../assets/myNotesIcon.svg";

const NotesActions = ({
  inputChanged,
  handleSubmit,
  handleCancel,
  handleDelete,
}) => {
  const homePage = window.location.href.endsWith("home");
  const createPage = window.location.href.endsWith("create-notes");
  const showClass = createPage ? "hide-action" : "";
  return (
    <div className="notes-actions">
      {!inputChanged && (
        <>
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
        </>
      )}
      {inputChanged && (
        <>
          <button
            className="icon-notes icon-edition barrel"
            type="submit"
            onClick={handleSubmit}
          >
            <img src={barrel} alt="edit icon" />
            <span>Save note</span>
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="icon-notes icon-edition"
          >
            <img src={cancelIcon} alt="cancel edition icon" />
            <span>Cancel edition</span>
          </button>
        </>
      )}

      <button
        type="button"
        onClick={handleDelete}
        className="icon-notes icon-edition"
      >
        <img src={trashCan} alt="delete icon" />
        <span>Delete note</span>
      </button>
    </div>
  );
};
export default NotesActions;
