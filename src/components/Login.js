import { useNavigate } from "react-router-dom";
import "./Login.css";
import React, { useState, useEffect } from "react";
import { auth, logInWithEmailAndPassword } from "../Firebase/Firebase";

import { useAuthState } from "react-firebase-hooks/auth";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigatetoSignUp = () => {
    navigate("/");
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="btn" className="submit" onClick={handleLogIn}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
