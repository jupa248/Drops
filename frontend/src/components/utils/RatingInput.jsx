import { useState } from "react";
import "./RatingInput.css";
import { BsDropletFill } from "react-icons/bs";

const RatingInput = ({ wineProperty, handleChange }) => {
  return (
    <div className="rating-container">
      <label>{wineProperty === "color" ? "color/clarity" : wineProperty}</label>
      <div className="drops-container">
        <div className="drop-container">
          <BsDropletFill className="drop" />
          <input
            type="button"
            name={wineProperty}
            value={5}
            onClick={handleChange}
          />
        </div>
        <div className="drop-container">
          <BsDropletFill className="drop" />
          <input
            type="button"
            name={wineProperty}
            value={4}
            onClick={handleChange}
          />
        </div>
        <div className="drop-container">
          <BsDropletFill className="drop" />
          <input
            type="button"
            name={wineProperty}
            value={3}
            onClick={handleChange}
          />
        </div>
        <div className="drop-container">
          <BsDropletFill className="drop" />
          <input
            type="button"
            name={wineProperty}
            value={2}
            onClick={handleChange}
          />
        </div>
        <div className="drop-container">
          <BsDropletFill className="drop" />
          <input
            type="button"
            name={wineProperty}
            value={1}
            onClick={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
export default RatingInput;
