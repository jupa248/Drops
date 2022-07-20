import React, {useState, useContext} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';
import "./Login.css";
import loginImg from "../utils/corkscrew.png"




function Login() {
  const [state, setState] = useState({})
  const navigate = useNavigate()
  const {setAuth, setUser} = useContext(AuthContext)

  const handleChange = (event) => {
    const {value, name} = event.target
    setState({...state, [name]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/auth/login', state).then((response) => {
      setUser(response.data)
      setAuth(true)
      navigate('/homepage')

    })
    .catch((error) => {
      alert(error)
    })
  }
  return (
  <div>
    <div>
      <form className="login-container" onSubmit={handleSubmit}>
        <label >Email address</label>
        <input name='email' type='email' onChange={handleChange}/>
        
        <label>Password</label>
        <input name='password' type='password'onChange={handleChange}/>
        <button type="submit" className="submit-button"></button>
      </form>
    </div>
  </div>
  )
}

export default Login;
