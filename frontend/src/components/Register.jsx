import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/register", inputs)
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
          {/* <label>Email address</label>
          <input name="email" type="email" onChange={handleChange} /> */}
          <label>Password</label>
          <input name="password" type="password" onChange={handleChange} />
          <button type="submit" className="signup-button">
            SIGNUP
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
