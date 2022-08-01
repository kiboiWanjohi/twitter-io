import { signInWithPopup } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../Firebase/Firebase";

import "./Signup.css";
const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, loading, error] = useAuthState(auth);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter email");
      registerWithEmailAndPassword(email, password);
    }
    useEffect(() => {
      if (loading) return;
      if (user) navigate("/Home");
    }, [user, loading]);
  };
  const navigateToLogin = () => {
    navigate("/Login");
  };
  const handleSignInWithGoogle = (e) => {
    e.preventDefault();
    useEffect(() => {signInWithPopup()}, [email, password])
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSignUp}>Sign Up</button>
        <p>or</p>
        <button onClick={handleSignInWithGoogle}>Sign Up With Google</button>
        <p>Already have an account ??</p>
        <button onClick={navigateToLogin}>Login</button>
      </div>
    </div>
  );
};

export default Signup;
