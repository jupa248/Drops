import { Link } from 'react-router-dom';
import './NotesActions.css';
import note from '../../assets/images/note.svg';

const NewNoteBtn = () => {
  const homeUrl = window.location.href.includes('home');
  const myNotesUrl = window.location.href.includes('my-notes');
  return (
    <>
      <Link to="/create-notes">
        <button
          className={
            homeUrl || myNotesUrl ? 'icon-notes light-font' : 'icon-notes'
          }
        >
          <img src={note} alt="" />
          <span>New Note</span>
        </button>
      </Link>
    </>
  );
};
export default NewNoteBtn;
