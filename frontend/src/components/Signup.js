import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Signup() {
  const [state, setState] = useState({})
  const navigate = useNavigate()
  const handleChange = (event) => {
    const {value, name} = event.target
    setState({...state, [name]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/auth/signup', state).then((response) => {
      alert('User has been registered')
      navigate('/login')
    })
    .catch((error) => {
      alert(error)
    })
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <label>Firstname</label>
      <input name='firstname' type='text' onChange={handleChange}/>
      <br/>
      <label>Lastname</label>
      <input name='lastname' type='text' onChange={handleChange}/>
      <br/>
      <label >Email address</label>
      <input name='email' type='email' onChange={handleChange}/>
      <br/>
      <label>Password</label>
      <input name='password' type='password'onChange={handleChange}/>
      <br/>
      <label>City</label>
      <input name='city' type='text' onChange={handleChange}/>
      <br/>
      <label>Language</label>
      <input name='language' type='text' onChange={handleChange}/>
      <br/>
      <button type="submit">Signup</button>
    </form>
  </div>;
}

export default Signup;
