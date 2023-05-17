import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./MyNotes.css";
import "./HomePage.css";
import "./SingleNote.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import note from "../utils/note.png";

const SingleNote = () => {
  let param = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("/notes/notes");
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="singleNotesPage">
      <NavBar />
      <div className="single-container">
        {data
          .filter((note) => note.id === +param.id)
          .map((note, id) => (
            <div className="myNotes" key={note.id}>
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

export default SingleNote;
