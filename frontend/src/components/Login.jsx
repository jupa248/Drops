import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form className="login-container" onSubmit={handleSubmit}>
          <label>Email address</label>
          <input name="email" type="email" onChange={handleChange} />

          <label>Password</label>
          <input name="password" type="password" onChange={handleChange} />
          <button type="submit" className="submit-button"></button>
        </form>
      </div>
    </>
  );
};
export default Login;
