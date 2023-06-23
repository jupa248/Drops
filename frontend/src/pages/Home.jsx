import React, { useEffect } from 'react';
import './Home.css';
import { useAppContext } from '../contexts/AppContext';
import NoteCardSmall from '../components/NoteCardSmall';
import NewNoteBtn from '../components/buttons/NewNoteBtn';
import MyNotesBtn from '../components/buttons/MyNotesBtn';

const Home = () => {
  const { user, notes, fetchNotes } = useAppContext();

  useEffect(() => {
    if (user) {
      fetchNotes(user?.id);
    }
  }, [fetchNotes, user]);

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
