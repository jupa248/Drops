import React, { useEffect, useRef } from "react";
import { EditIcon } from "../assets/svgIcons";

const EditInput = ({ label, value, onChange, focused, onEditClick }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused]);

  return (
    <div>
      <label>{label}:</label>
      <input type="text" value={value} onChange={onChange} ref={inputRef} />
      <button className="icon" onClick={onEditClick}>
        <EditIcon />
      </button>
    </div>
  );
};

export default EditInput;
