import { useState } from "react";
import "./Dropdown.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Dropdown = ({
  options,
  title,
  activeDropdown,
  setActiveDropdown,
  handleDropdownChange,
}) => {
  const isActive = activeDropdown === title;
  const [selected, setSelected] = useState("Select one");

  const handleToggleDropdown = () => {
    if (isActive) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(title);
    }
  };

  const handleOptionClick = (title, option) => {
    setSelected(option);
    setActiveDropdown(null);
    handleDropdownChange(title, option);
  };

  return (
    <div className="dropdown">
      <div onClick={handleToggleDropdown} className="dropdown-btn">
        {selected}
        <span>
          {isActive ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </div>
      <div
        className="dropdown-content"
        style={{
          display: isActive ? "block" : "none",
        }}
      >
        {options.map((option) => (
          <div
            key={option}
            className={`item ${
              title !== "Color" ? "item-bg item-font" : ""
            } ${option.toLowerCase()}`}
            onClick={() => handleOptionClick(title, option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
