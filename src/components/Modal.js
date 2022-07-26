import React from "react";
import { useState } from "react";
import { app } from "../Firebase/firebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./Modal.css";
function Modal({ closeModal }) {
  let auth = getAuth();
  let googleProvider = new GoogleAuthProvider();
  const [data, setData] = useState({});
  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };
  const handleSubmit = () => {
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="modal">
      <div className="modal-container">
        <button className="close" onClick={() => closeModal(false)}>
          {" "}
          X{" "}
        </button>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          onChange={(event) => handleInput(event)}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          id="password"
          onChange={(event) => handleInput(event)}
        />
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default Modal;
