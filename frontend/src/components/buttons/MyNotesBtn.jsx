import { Link } from 'react-router-dom';
import './NotesActions.css';
import myNotesIcon from '../../assets/myNotesIcon.svg';

const MyNotesBtn = () => {
  const homeUrl = window.location.href.includes('home');
  const myNotesUrl = window.location.href.includes('my-notes');
  return (
    <>
      <Link to="/my-notes">
        <button
          className={
            homeUrl || myNotesUrl ? 'icon-notes light-font' : 'icon-notes'
          }
        >
          <img src={myNotesIcon} alt="my-notes-icon" />
          <span>My Notes</span>
        </button>
      </Link>
    </>
  );
};
export default MyNotesBtn;
