import React from "react";
import Login from "./Login";
import "./LandingPage.css"
import lockIcon from "../utils/sacacorchos.jpg"


const LandingPage = () => {

  return (
    <>
      <div className="bg-img">
        <div className="homepage-login">
          <div className="login-container">
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
