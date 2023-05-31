import { useState } from "react";
import "./RatingInput.css";
import { BsFillDropletFill } from "react-icons/bs";

const RatingInput = ({ wineProperty }) => {
  const [rating, setRating] = useState("");
  console.log("rating:", rating);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="rating-container">
      <label>{wineProperty}</label>
      <div className="drops-container">
        <BsFillDropletFill
          type="button"
          className="drop"
          onClick={() => handleRating(5)}
        />
        <BsFillDropletFill
          type="button"
          className="drop"
          onClick={() => handleRating(4)}
        />
        <BsFillDropletFill
          type="button"
          className="drop"
          onClick={() => handleRating(3)}
        />
        <BsFillDropletFill
          type="button"
          className="drop"
          onClick={() => handleRating(2)}
        />
        <BsFillDropletFill
          type="button"
          className="drop"
          onClick={() => handleRating(1)}
        />
      </div>
      <span>
        <h4>{rating ? rating : "0/5"}</h4>
      </span>
    </div>
  );
};
export default RatingInput;
