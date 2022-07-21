import React from "react";
import "./NavBar.css";
import Logo from "../utils/logo.jpg";
import { Link } from "react-router-dom";


 const NavBar = () => {
    return (
        <nav className="nav-container">
            <div className="logo">
                LOGO
                {/* <img src={Logo} alt="" /> */}
            </div>
            <Link to="/my-notes" className="my-notes">
            <div>
                My Notes
            </div>
            </Link>
        </nav>
    );
    }

    export default NavBar;