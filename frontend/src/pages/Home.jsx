import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./Home.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import note from "../assets/note.svg";
import NoteCardSmall from "../components/NoteCardSmall";

const Home = () => {
  const { user, notes, fetchNotes } = useAppContext();
  console.log("user home", user);
  useEffect(() => {
    // Fetch notes for the logged-in user
    if (user) {
      fetchNotes(user?.id);
    }
  }, [user]);

  //console.log("notes home", notes);
  if (!user || !notes) {
    // Render a loading state or placeholder while data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="homepage">
        <div className="home-bg">
          <h2>Your latest notes...</h2>
          <div className="desk-home">
            {notes
              .filter((note, index) => index < 4)
              .map((note) => (
                <NoteCardSmall key={note.note_id} note={note} />
              ))}
            {/* {data
              .filter((wine, id) => id < 3)
              .map((wine) => (
                <WineCards {...wine} />
              ))}  */}
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
    </div>
  );
};

export default Home;
