import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import note from "../assets/note.svg";
import "./Note.css";
import { useEffect, useState } from "react";

const Note = () => {
  const { getNote } = useAppContext();
  const [myNote, setMyNote] = useState("");
  let param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNote(param.id);
        setMyNote(response[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="singleNotesPage">
      <div className="single-container">
        <div className="myNotes-container">
          <span>Name:</span>
          <p>{myNote.wine}</p>
          <p>Tasting date: {myNote.date}</p>
          <p>Price: €{myNote.price}</p>
          <p>Year: {myNote.year}</p>
          <p>Variety: {myNote.variety}</p>
          <p>Winery: {myNote.winery}</p>
          <p>Country/Region: {myNote.region}</p>
          <p>Color: {myNote.color}</p>
          <p>Aroma: {myNote.aroma}</p>
          <p>Body: {myNote.body}</p>
          <p>Taste: {myNote.taste}</p>
          <p>Finish: {myNote.finish}</p>
          <p>My notes: {myNote.mynotes}</p>
        </div>
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
