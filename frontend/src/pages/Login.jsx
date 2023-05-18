import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login({ username, password });

    setUsername("");
    setPassword("");
    navigate("/home");
  };

  return (
    <div className="signup-img">
      <div className="signup-container">
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="submit-button"></button>
        </form>
      </div>
    </div>
  );
};

export default Login;
