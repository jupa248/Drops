import './NoteCardSmall.css';
import { Link } from 'react-router-dom';
import glass from '../../assets/images/wine-glass.svg';
import { FaChevronRight } from 'react-icons/fa';
import { BsDropletFill } from 'react-icons/bs';

const NoteCardSmall = ({ note }) => {
  const {
    wine,
    variety,
    year,
    note_id,
    aroma$Rate,
    body$Rate,
    color$Rate,
    taste$Rate,
    finish$Rate,
  } = note;

  const averageRating =
    (+aroma$Rate + +body$Rate + +color$Rate + +taste$Rate + +finish$Rate) / 5;

  return (
    <article className="card-container">
      <img src={glass} alt="glass icon" className="card-img" />
      <div
        className={
          averageRating > 0 ? 'card-content has-rating' : 'card-content'
        }
      >
        <div>
          <h4>{wine}</h4>
          <p>
            {variety}, {year}
          </p>
        </div>
        {averageRating > 0 && (
          <div>
            <span>
              {averageRating} <BsDropletFill />
            </span>
          </div>
        )}
      </div>
      <Link to={`/note/${note_id}`} className="link-button card-link">
        <span>
          See note <FaChevronRight />
        </span>
      </Link>
    </article>
  );
};
export default NoteCardSmall;
