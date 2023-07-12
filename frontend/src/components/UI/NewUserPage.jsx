import './NewUserPage.css';
import { Link } from 'react-router-dom';

const NewUserPage = () => {
  return (
    <div className="new-user-container">
      <div className="new-user-content new-user-img">
        <div className="new-user-text">
          <h5>
            <span>Step 1: </span>See – Look at the appearance of the wine and
            see what it tells you.
          </h5>
          <h5>
            <span>Step 2: </span>Swirl – Swirl the glass to let aromatic notes
            come out.
          </h5>
          <h5>
            <span>Step 3: </span>Sniff – Smell the wine and see what scents you
            can isolate.
          </h5>
          <h5>
            <span>Step 4: </span>Sip – Taste the wine and think about components
            like acidity, tannin, flavor, and more.
          </h5>
          <h5>
            <span>Step 5: </span>Savor – Sit back and reflect on what you just
            tasted, thinking about how these components balance each other and
            result in the final quality of the wine.
          </h5>
          <p className="tips">
            For more tips visit our
            <Link to="/vocabulary"> Vocabulary </Link>
            page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewUserPage;
