import React from "react";
import "./NavBar.css";
import Logo from "../utils/logo.jpg";


 const NavBar = () => {
    return (
        <nav className="nav-container">
            <div className="logo">
                LOGO
                {/* <img src={Logo} alt="" /> */}
            </div>
            <div className="my-notes">
                My Notes
            </div>
        </nav>
    );
    }

    export default NavBar;