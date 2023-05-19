import React, { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { login } = useAppContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ username, password });
      const { user } = response.data;

      navigate("/home");
    } catch (error) {
      console.log("Login error:", error);
    }
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
