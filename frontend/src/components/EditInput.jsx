import { useRef } from "react";
import { EditIcon } from "../assets/svgIcons";

const EditInput = ({ label, value, onChange, type }) => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="edit-input">
      <label>{label === "mynotes" ? "My notes" : label}:</label>
      {label === "mynotes" && (
        <textarea
          rows={8}
          maxLength={255}
          type={type}
          name={label}
          value={value}
          onChange={onChange}
          ref={inputRef}
        />
      )}
      {label !== "mynotes" && (
        <input
          type={type}
          name={label}
          value={value}
          onChange={onChange}
          ref={inputRef}
        />
      )}
      <button className="icon icon-edit" type="button" onClick={handleFocus}>
        <EditIcon />
      </button>
    </div>
  );
};

export default EditInput;
