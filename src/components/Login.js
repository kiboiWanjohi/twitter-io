import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };
  const navigatetoSignUp = () => {
    navigate("/");
  };
  const handleSubmit = () => {};
  return (
    <div className="modal">
      <div className="modal-container">
        <button className="close" onClick={navigatetoSignUp}>
          {" "}
          X{" "}
        </button>
        <form action="">
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            onChange={(event) => handleInput(event)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={(event) => handleInput(event)}
          />
          <button id="btn" className="submit" onClick={handleSubmit}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
