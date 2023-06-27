import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { useNavigate, Link } from 'react-router-dom';
import { CgDrop } from 'react-icons/cg';
import './Login.css';
import { toast } from 'react-toastify';

const Login = () => {
  const { login } = useAppContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login({ username, password });

      navigate('/home');
    } catch (error) {
      setUsername('');
      setPassword('');
      toast.error(error);
    }
  };

  return (
    <section className="login-container">
      <div className="login-header">
        <h1>
          <CgDrop />
          Drops
        </h1>
        <p>Wine notes application</p>
      </div>
      <form onSubmit={handleLogin}>
        <h3>Please Login</h3>
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
        <Link to={'/register'}>
          <p>Don't have an account?</p>
        </Link>
      </form>
      <span></span>
    </section>
  );
};
export default Login;
