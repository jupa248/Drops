import { useState } from "react";
import "./AdvancedNotes.css";
import Dropdown from "./Dropdown";

const AdvancedNotes = ({ formData, handleDropdownChange }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      {Object.entries(formData).map(([category, options]) => (
        <section key={category} className="advanced-section">
          <h3>{category}</h3>
          <div className="advanced-container">
            {options.map(({ title, options }) => (
              <div key={title}>
                <h4>{title}</h4>
                <Dropdown
                  options={options}
                  title={title}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                  handleDropdownChange={handleDropdownChange}
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default AdvancedNotes;
