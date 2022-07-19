import React, {useState, useContext} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext'



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
      alert('User is logged')
      navigate('/profile')

    })
    .catch((error) => {
      alert(error)
    })
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <label >Email address</label>
      <input name='email' type='email' onChange={handleChange}/>
      <br/>
      <label>Password</label>
      <input name='password' type='password'onChange={handleChange}/>
      <br/>
      <button type="submit">Login</button>
    </form>
  </div>;
}

export default Login;
