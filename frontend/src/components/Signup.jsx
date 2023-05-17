import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [state, setState] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/auth/signup", state)
      .then((response) => {
        alert("User has been registered");
        navigate("/login");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="signup-img">
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input name="username" type="text" onChange={handleChange} />
          <label>Email address</label>
          <input name="email" type="email" onChange={handleChange} />
          <label>Password</label>
          <input name="password" type="password" onChange={handleChange} />
          <button type="submit" className="signup-button">
            SIGNUP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
