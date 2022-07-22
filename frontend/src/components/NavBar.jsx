import React from "react";
import "./NavBar.css";
import Logo from "../utils/logo.jpg";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { CgDrop } from "react-icons/cg";


 const NavBar = () => {
    return (
        <nav className="nav-container">
            <Link to="/homepage" className="logo">
            <div className="drops">
            <CgDrop />Drops 
            </div>
            </Link>
            <Link to="/my-notes" className="my-notes">
            <div className="myNotesNav">
                My Notes <BsFillPencilFill /> 
            </div>
            </Link>
        </nav>
    );
    }
                

    export default NavBar;