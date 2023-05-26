import cancelIcon from "../assets/cancelIcon.svg";

const CancelBtn = ({ handleCancel }) => {
  return (
    <button
      type="button"
      onClick={handleCancel}
      className="icon-notes icon-edition"
    >
      <img src={cancelIcon} alt="cancel edition icon" />
      <span>Cancel edition</span>
    </button>
  );
};
export default CancelBtn;
