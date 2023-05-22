import React, { useState, useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { CgDrop } from "react-icons/cg";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { user, logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const handleHamburger = () => {
    setActive(!active);
  };

  const body = document.querySelector("body");
  active
    ? (body.style.overflowY = "hidden")
    : (body.style.overflowY = "initial");

  return (
    <div className="navbar-container">
      <Link to="/homepage">
        <div className="logo">
          <CgDrop />
          Drops
        </div>
      </Link>
      {user && (
        <div>
          <h2>{user[0]?.username}</h2>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
      <nav className="navbar-desktop">
        <div className="">
          <Link to="/homepage">Home</Link>
          <Link to="/my-notes">My notes</Link>
          <Link to="/create-notes">Take notes</Link>
          <Link to="/dictionary">Dictionary</Link>
          <Link to="/wish">Wish list</Link>
        </div>
      </nav>
      <button
        className={active ? "burger-is-active , hamburger" : "hamburger"}
        onClick={handleHamburger}
      >
        <div className="bar"></div>
      </button>
      <nav className={active ? "side-is-active , mobileNav" : "mobileNav"}>
        <Link to="/homepage" onClick={handleHamburger}>
          Home
        </Link>
        <Link to="/my-notes" onClick={handleHamburger}>
          My notes
        </Link>
        <Link to="/create-notes" onClick={handleHamburger}>
          Take notes
        </Link>
        <Link to="/dictionary" onClick={handleHamburger}>
          Dictionary
        </Link>
        <Link to="/wish" onClick={handleHamburger}>
          Wish list
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
