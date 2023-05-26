import trashCan from "../assets/trashCan.svg";

const DeleteNoteBtn = ({ handleDelete }) => {
  return (
    <button
      type="button"
      onClick={handleDelete}
      className="icon-notes icon-edition"
    >
      <img src={trashCan} alt="delete icon" />
      <span>Delete note</span>
    </button>
  );
};
export default DeleteNoteBtn;
