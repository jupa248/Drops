import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import note from "../assets/note.svg";
import "./Note.css";

const Note = () => {
  const { notes } = useAppContext();
  let param = useParams();

  return (
    <div className="singleNotesPage">
      <div className="single-container">
        {notes
          .filter((note) => note.note_id === +param.id)
          .map((note, id) => (
            <div className="myNotes">
              <div className="myNotes-container">
                <p>Name: {note.wine}</p>
                <p>Tasting date: {note.date}</p>
                <p>Price: €{note.price}</p>
                <p>Year: {note.year}</p>
                <p>Variety: {note.variety}</p>
                <p>Winery: {note.winery}</p>
                <p>Country/Region: {note.region}</p>
                <p>Color: {note.color}</p>
                <p>Aroma: {note.aroma}</p>
                <p>Body: {note.body}</p>
                <p>Taste: {note.taste}</p>
                <p>Finish: {note.finish}</p>
                <p>My notes: {note.mynotes}</p>
              </div>
            </div>
          ))}
        <div className="see-all">
          <div>
            <Link to="/create-notes">
              <button className="create-note-button">
                <img src={note} alt="" />
              </button>
            </Link>
          </div>
          <div>
            <Link to="/my-notes">
              <button className="see-all-button">My notes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Note;
