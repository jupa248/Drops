import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./Home.css";
import { toast } from "react-toastify";
import { useAppContext } from "../contexts/AppContext";
import note from "../assets/note.svg";
import NoteCardSmall from "../components/NoteCardSmall";
import NewNoteBtn from "../components/buttons/NewNoteBtn";
import MyNotesBtn from "../components/buttons/MyNotesBtn";

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

  const reversedNotes = [...notes].reverse();

  return (
    <section className="homepage">
      <div>
        <h2>Your latest notes...</h2>
        {reversedNotes
          .filter((note, index) => index < 4)
          .map((note, index) => (
            <NoteCardSmall key={index} note={note} />
          ))}
      </div>
      <div className="notes-actions">
        <NewNoteBtn />
        <MyNotesBtn />
      </div>
    </section>
  );
};

export default Home;
