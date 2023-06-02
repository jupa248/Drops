import { useState } from "react";
import "./AdvancedNotes.css";
import Dropdown from "./Dropdown";

const AdvancedNotes = ({ prop }) => {
  const [title, options] = prop;

  return (
    <section className="advanced-container">
      <h3>{title}</h3>
      <Dropdown options={options} />
    </section>
  );
};

export default AdvancedNotes;
