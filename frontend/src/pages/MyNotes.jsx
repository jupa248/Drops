import { useEffect, useState, useRef } from 'react';
import { useAppContext } from '../contexts/AppContext';
import NoteCardSmall from '../components/UI/NoteCardSmall';
import { BsArrowUp } from 'react-icons/bs';
import { BsArrowDown } from 'react-icons/bs';
import NewNoteBtn from '../components/buttons/NewNoteBtn';
import { toast } from 'react-toastify';
import Spinner from '../components/UI/Spinner';
import './MyNotes.css';

const MyNotes = () => {
  const { user, fetchNotes } = useAppContext();
  const [maxIndex, setMaxIndex] = useState(10);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState();
  const [scrollDown, setScrollDown] = useState();
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

  const scrollPosition = () => {
    if (window.scrollY < 250) {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
  };
  window.addEventListener('scroll', scrollPosition);

  const handleGoToBottom = () => {
    window.scrollTo({ top: 5000, behavior: 'smooth' });
  };

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let reversedNotes;
  if (notes.length > 0) {
    reversedNotes = [...notes]?.reverse();
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="my-notes-container">
      <div className="small-cards-container">
        <h2>My Notes</h2>
        {reversedNotes &&
          reversedNotes.map(
            (note, index) =>
              index < maxIndex && <NoteCardSmall key={index} note={note} />,
          )}
        {scrollDown && (
          <button
            type="button"
            onClick={handleGoToBottom}
            className="back-to-top-btn fixed-btn"
          >
            <BsArrowDown />
          </button>
        )}
        {!scrollDown && maxIndex > 10 && (
          <button
            type="button"
            onClick={handleGoToTop}
            className="back-to-top-btn fixed-btn"
          >
            <BsArrowUp />
          </button>
        )}
        <div className="fixed-btn-left">
          <NewNoteBtn />
        </div>
        <div ref={bottomRef} className="notes-actions my-notes-actions">
          <button type="button" onClick={handleShowMore} className={showClass}>
            Show more
          </button>
        </div>
      </div>
      )
    </section>
  );
};
export default MyNotes;
