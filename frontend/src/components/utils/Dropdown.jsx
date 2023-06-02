import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Dropdown = ({ options }) => {
  const [activeStates, setActiveStates] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const dropdownRefs = useRef({});

  useEffect(() => {
    const initialActiveStates = {};
    const initialSelectedOptions = {};

    Object.keys(options).forEach((title) => {
      initialActiveStates[title] = false;
      initialSelectedOptions[title] = "select...";
    });

    setActiveStates(initialActiveStates);
    setSelectedOptions(initialSelectedOptions);
  }, [options]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedElement = event.target;
      const shouldCloseDropdowns = Object.values(dropdownRefs.current).every(
        (ref) => {
          return ref && ref.current && !ref.current.contains(clickedElement);
        }
      );

      if (shouldCloseDropdowns) {
        setActiveStates((prevState) => {
          const updatedState = {};
          Object.keys(prevState).forEach((title) => {
            updatedState[title] = false;
          });
          return updatedState;
        });
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = (title) => {
    setActiveStates((prevState) => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === title ? !prevState[key] : false;
        return acc;
      }, {}),
    }));
  };

  const handleOptionClick = (title, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [title]: option,
    }));
    setActiveStates((prevState) => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {}),
    }));
  };

  const renderOptions = (title, options) => {
    console.log("Options", options);
    if (!options || !options.length) {
      return null;
    }

    return (
      <div
        className="dropdown-content"
        style={{ display: activeStates[title] ? "block" : "none" }}
      >
        {options.map((option) => (
          <div
            key={option}
            className="item"
            onClick={() => handleOptionClick(title, option)}
          >
            {option}
          </div>
        ))}
      </div>
    );
  };

  return (
    <article className="char-container">
      {Object.entries(options).map(([title, { options }]) => (
        <div key={title}>
          <label>{title}: </label>
          <div
            className="dropdown"
            ref={(ref) => (dropdownRefs.current[title] = ref)}
          >
            <div
              onClick={() => handleToggleDropdown(title)}
              className="dropdown-btn"
            >
              {selectedOptions[title]}
              <span>
                {activeStates[title] ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </span>
            </div>
            {renderOptions(title, options)}
          </div>
        </div>
      ))}
    </article>
  );
};

export default Dropdown;
