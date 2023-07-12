import { ImSpinner2 } from 'react-icons/im';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner">
      <ImSpinner2 />
      <h2>Loading...</h2>
    </div>
  );
};
export default Spinner;
