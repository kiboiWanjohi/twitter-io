import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const handleClick = (e) => {
    e.preventDefault();
  };
  const navigateToLogin = () => {
    navigate("/Login");
  };
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };
  return (
    <div className="main">
      <div className="left">
        <h4>
          <i class="fa-solid fa-magnifying-glass fa-lg"></i>Follow your
          interests
        </h4>

        <h4>
          <i class="fa-solid fa-people"></i>Hear what people are talking about
        </h4>

        <h4>
          <i class="fa-solid fa-comment fa-lg "></i>Join the conversation
        </h4>
      </div>
      <div className="right">
        <img src="" alt="" />
        <h3>See what's happening in the world right now</h3>
        <p>Join twitter today</p>{" "}
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
        <button onClick={handleClick}>Sign Up</button>
        <p>or</p>
        <button onClick={handleSignUp}>Sign Up With Google</button>
        <p>Already have an account ??</p>
        <button onClick={navigateToLogin}>Login</button>
      </div>
    </div>
  );
};

export default Signup;
