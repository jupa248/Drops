import { useEffect, useState } from 'react';
import './RatingInput.css';
import { BsDropletFill } from 'react-icons/bs';

const RatingInput = ({ wineProperty, handleChange, currentRate }) => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (e) => {
    e.stopPropagation();
    setSelectedRating(e.target.value);
    handleChange(e);
  };
  const rateProperty = wineProperty.replaceAll('$Rate', '');

  useEffect(() => {
    const changeSelectedRate = () => {
      setSelectedRating(currentRate);
    };

    if (!!currentRate) {
      changeSelectedRate();
    }
  }, [currentRate]);

  return (
    <article className="rating-container">
      <label>{rateProperty === 'color' ? 'color/clarity' : rateProperty}</label>
      <div className="drops-container">
        <div
          className={`drop-container ${selectedRating >= 5 ? 'selected' : ''}`}
          onClick={handleRatingClick}
        >
          <BsDropletFill className="drop" />
          <input type="button" name={wineProperty} value={5} />
        </div>
        <div
          className={`drop-container ${selectedRating >= 4 ? 'selected' : ''}`}
          onClick={handleRatingClick}
        >
          <BsDropletFill className="drop" />
          <input type="button" name={wineProperty} value={4} />
        </div>
        <div
          className={`drop-container ${selectedRating >= 3 ? 'selected' : ''}`}
          onClick={handleRatingClick}
        >
          <BsDropletFill className="drop" />
          <input type="button" name={wineProperty} value={3} />
        </div>
        <div
          className={`drop-container ${selectedRating >= 2 ? 'selected' : ''}`}
          onClick={handleRatingClick}
        >
          <BsDropletFill className="drop" />
          <input type="button" name={wineProperty} value={2} />
        </div>
        <div
          className={`drop-container ${selectedRating >= 1 ? 'selected' : ''}`}
          onClick={handleRatingClick}
        >
          <BsDropletFill className="drop" />
          <input type="button" name={wineProperty} value={1} />
        </div>
      </div>
    </article>
  );
};

export default RatingInput;
