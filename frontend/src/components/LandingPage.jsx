import React from "react";
import Login from "./Login";
import "./LandingPage.css"
import lockIcon from "../utils/sacacorchos.jpg"
import { Link } from "react-router-dom";
import { CgDrop } from "react-icons/cg";


const LandingPage = () => {

  return (
    <>
      <div className="bg-img">
      <div className="dropsLogin">
            <CgDrop className="dropsIcon" />Drops 
            </div>
        <div className="landingPage-login">
          <div className="login-container">
            <Login />
            <Link to="/signup" className="join">
            <p>Don't have an account?</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
