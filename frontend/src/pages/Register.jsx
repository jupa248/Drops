import React, { useContext, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(useAppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    await register({ username, password });

    setUsername("");
    setPassword("");
    navigate("/login");
  };

  return (
    <div className="signup-img">
      <div className="signup-container">
        <form onSubmit={handleRegister}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signup-button">
            SIGNUP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
