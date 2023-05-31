import { useEffect, useState, useRef } from "react";
import { useAppContext } from "../contexts/AppContext";
import NoteCardSmall from "../components/NoteCardSmall";
import { BsArrowUp } from "react-icons/bs";
import "./MyNotes.css";

const MyNotes = () => {
  const { user, notes, fetchNotes, loading } = useAppContext();
  const [maxIndex, setMaxIndex] = useState(10);
  const bottomRef = useRef(null);

  const showClass = maxIndex < notes.length ? "show-btn" : "hidden";

  useEffect(() => {
    if (user) {
      fetchNotes(user?.id);
    }
  }, [user]);

  useEffect(() => {
    if (bottomRef.current && maxIndex > 10) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [maxIndex]);

  const handleShowMore = () => {
    setMaxIndex(maxIndex + 10);
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="my-notes-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {notes.map(
            (note, index) =>
              index < maxIndex && <NoteCardSmall key={index} note={note} />
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
            <button
              type="button"
              onClick={handleShowMore}
              className={showClass}
            >
              Show more
            </button>
          </div>
        </div>
      )}

      <div ref={bottomRef} className="notes-actions">
        Bottom ref
      </div>
    </section>
  );
};
export default MyNotes;
