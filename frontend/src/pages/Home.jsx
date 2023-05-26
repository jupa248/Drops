import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import { useAppContext } from "../contexts/AppContext";
import note from "../assets/note.svg";
import NoteCardSmall from "../components/NoteCardSmall";
import NotesActions from "../components/NotesActions";

const Home = () => {
  const { user, notes, fetchNotes } = useAppContext();

  useEffect(() => {
    if (user) {
      fetchNotes(user?.id);
    }
  }, [user]);

  if (!user || !notes) {
    //TO DO: Spinning
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="homepage">
        <div className="home-bg">
          <div className="desk-home">
            {notes
              .filter((note, index) => index < 4)
              .map((note) => (
                <NoteCardSmall key={note.note_id} note={note} />
              ))}
          </div>
          <div>
            <NotesActions />
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
};

export default Home;
