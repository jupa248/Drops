import { useRef } from "react";
import { EditIcon } from "../assets/svgIcons";

const EditInput = ({ label, value, onChange, type }) => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="edit-input">
      <label>{label}:</label>
      <input
        type={type}
        name={label}
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
      <button className="icon icon-edit" type="button" onClick={handleFocus}>
        <EditIcon />
      </button>
    </div>
  );
};

export default EditInput;
