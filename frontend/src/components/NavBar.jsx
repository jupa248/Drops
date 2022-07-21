import React from "react";
import "./NavBar.css";
import Logo from "../utils/logo.jpg";
import { Link } from "react-router-dom";


 const NavBar = () => {
    return (
        <nav className="nav-container">
            <Link to="/homepage" className="logo">
            <div>
                
                <img src={Logo} alt="" />
            </div>
            </Link>
            <Link to="/my-notes" className="my-notes">
            <div>
                My Notes
            </div>
            </Link>
        </nav>
    );
    }

    export default NavBar;