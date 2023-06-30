import { useEffect, useState, useRef } from 'react';
import { useAppContext } from '../contexts/AppContext';
import NoteCardSmall from '../components/UI/NoteCardSmall';
import { BsArrowUp } from 'react-icons/bs';
import NewNoteBtn from '../components/buttons/NewNoteBtn';
import MyNotesBtn from '../components/buttons/MyNotesBtn';
import { toast } from 'react-toastify';
import Spinner from '../components/UI/Spinner';
import './MyNotes.css';

const MyNotes = () => {
  const { user, fetchNotes } = useAppContext();
  const [maxIndex, setMaxIndex] = useState(10);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState();
  const bottomRef = useRef(null);
  const showClass = maxIndex < notes?.length ? 'show-btn' : 'hidden';


  useEffect(() => {
    const fetchAllUserNotes = async () => {
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
      fetchAllUserNotes(user?.id);
    }
  }, [user, fetchNotes]);

  useEffect(() => {
    if (bottomRef.current && maxIndex > 10) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [maxIndex]);

  const handleShowMore = () => {
    setMaxIndex(maxIndex + 10);
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const reversedNotes = [...notes].reverse();

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="my-notes-container">
      <div>
        <h2>My Notes</h2>
        {reversedNotes.map(
          (note, index) =>
            index < maxIndex && <NoteCardSmall key={index} note={note} />,
        )}
        <div className="btn-container">
          {maxIndex > 10 && (
            <button
              type="button"
              onClick={handleGoToTop}
              className="back-to-top-btn"
            >
              <BsArrowUp />
            </button>
          )}
          <button type="button" onClick={handleShowMore} className={showClass}>
            Show more
          </button>
        </div>
      </div>
      )
      <div ref={bottomRef} className="notes-actions">
        <NewNoteBtn />
        <MyNotesBtn />
      </div>
    </section>
  );
};
export default MyNotes;
