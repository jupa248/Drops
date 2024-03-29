import { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { CgDrop } from 'react-icons/cg';
import { useAppContext } from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { TbLogout } from 'react-icons/tb';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { user, logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const handleHamburger = () => {
    window.scroll(0, 51);
    setActive(!active);
  };

  return (
    <div className="navbar-container bg-red">
      <Link to="/homepage">
        <div className="logo">
          <CgDrop />
          Drops
        </div>
      </Link>

      <nav className="navbar-desktop">
        <div className="">
          <Link to="/homepage">Home</Link>
          <Link to="/my-notes">My notes</Link>
          <Link to="/create-notes">Take notes</Link>
          <Link to="/vocabulary">Vocabulary</Link>
        </div>
        {user && (
          <div>
            <button type="button" onClick={handleLogout} className="logout-btn">
              Logout <TbLogout />
            </button>
          </div>
        )}
      </nav>
      <button
        className={active ? 'burger-is-active , hamburger' : 'hamburger'}
        onClick={handleHamburger}
      >
        <div className="bar"></div>
      </button>
      <nav className={active ? 'side-is-active , mobileNav' : 'mobileNav'}>
        <Link to="/homepage" onClick={handleHamburger}>
          Home
        </Link>
        <Link to="/my-notes" onClick={handleHamburger}>
          My notes
        </Link>
        <Link to="/create-notes" onClick={handleHamburger}>
          Take notes
        </Link>
        <Link to="/vocabulary" onClick={handleHamburger}>
          Vocabulary
        </Link>
        {user && (
          <div>
            <button type="button" onClick={handleLogout} className="logout-btn">
              Logout <TbLogout />
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
