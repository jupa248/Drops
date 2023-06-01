import { useState } from "react";
import "./AdvancedNotes.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { advProps } from "../../assets/data/formData";

const AdvancedNotes = ({ props }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("select...");

  console.log("advProps", props);

  return (
    <section className="advanced-container">
      <h2>AdvancedNotes</h2>
      <article className="char-container">
        <h3>Appearance</h3>
        <label>Clarity: </label>
        <div className="dropdown">
          <div
            onClick={(e) => {
              setIsActive(!isActive);
            }}
            className="dropdown-btn"
          >
            {selected}
            <span>
              {isActive ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </span>
          </div>
          <div
            className="dropdown-content"
            style={{ display: isActive ? "block" : "none" }}
          >
            <option
              onClick={(e) => {
                setSelected(e.target.textContent);
                setIsActive(!isActive);
              }}
              className="item"
            >
              One
            </option>
            {/* <div
              className="item"
              onClick={(e) => {
                setSelected(e.target.textContent);
                setIsActive(!isActive);
              }}
            >
              Two
            </div>
            <div
              className="item"
              onClick={(e) => {
                setSelected(e.target.textContent);
                setIsActive(!isActive);
              }}
            >
              Three
            </div> */}
          </div>
        </div>
      </article>
    </section>
  );
};
export default AdvancedNotes;
