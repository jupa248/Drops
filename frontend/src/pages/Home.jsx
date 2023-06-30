import { useState, useEffect } from 'react';
import './Home.css';
import { useAppContext } from '../contexts/AppContext';
import NoteCardSmall from '../components/UI/NoteCardSmall';
import NewNoteBtn from '../components/buttons/NewNoteBtn';
import MyNotesBtn from '../components/buttons/MyNotesBtn';
import { toast } from 'react-toastify';
import Spinner from '../components/UI/Spinner';

const Home = () => {
  const { user, fetchNotes } = useAppContext();
  const [loading, setLoading] = useState();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchUserNotes = async () => {
      try {
        setLoading(true);
        const response = await fetchNotes(user?.id);
        setNotes(response);
        setLoading(false);
      } catch (error) {
        toast.error(error);
      }
    };

    if (user) {
      fetchUserNotes();
    }
  }, [fetchNotes, user]);

  if (loading) {
    return <Spinner />;
  }

  const reversedNotes = [...notes].reverse();

  return (
    <section className="homepage">
      <div className="homepage-header">
        <h2>Hi {user.username},</h2>
        <h3>
          {reversedNotes.length > 0
            ? 'these are your latest notes...'
            : 'start creating your notes...'}
        </h3>
      </div>
      <div>
        {reversedNotes &&
          reversedNotes
            .filter((note, index) => index < 4)
            .map((note, index) => <NoteCardSmall key={index} note={note} />)}
      </div>
      <div className="notes-actions">
        <NewNoteBtn />
        <MyNotesBtn />
      </div>
    </section>
  );
};

export default Home;
