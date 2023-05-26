import barrel from "../assets/barrel.svg";

const SaveNoteBtn = ({ handleSubmit }) => {
  return (
    <button
      className="icon-notes icon-edition barrel"
      type="submit"
      onClick={handleSubmit}
    >
      <img src={barrel} alt="edit icon" />
      <span>Save note</span>
    </button>
  );
};
export default SaveNoteBtn;
