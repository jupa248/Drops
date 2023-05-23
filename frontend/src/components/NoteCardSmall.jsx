import "./NoteCardSmall.css";
import { Link } from "react-router-dom";
import glass from "../assets/wine-glass.svg";
import { FaChevronRight } from "react-icons/fa";

const NoteCardSmall = ({ note }) => {
  const { wine, variety, year, note_id } = note;
  return (
    <article className="card-container">
      <img src={glass} alt="glass icon" className="card-img" />
      <div className="card-content">
        <h4>{wine}</h4>
        <p>
          {variety}, {year}
        </p>
      </div>
      <Link to={`/note/${note_id}`} className="link-button card-link">
        <span>
          See note <FaChevronRight />
        </span>
      </Link>
    </article>
  );
};
export default NoteCardSmall;
