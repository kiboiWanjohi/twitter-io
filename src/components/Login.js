import React from "react";
import "./Login.css";
import { useState } from "react";
import Modal from "./Modal";
function Login() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="main">
      <div className="left">
        <h4>
          <i class="fa-solid fa-magnifying-glass fa-lg"></i>Follow your
          interests
        </h4>

        <h4>
          <i class="fa-solid fa-people-pants fa-lg"></i>Hear what people are
          talking about
        </h4>

        <h4>
          <i class="fa-solid fa-comment fa-lg "></i>Join the conversation
        </h4>
      </div>
      <div className="right">
        <img src="" alt="" />
        <h3>See what's happening in the world right now</h3>
        <p>Join twitter today</p>
        <button
          className="openModal"
          id="sign-up"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Sign Up
        </button>
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}
export default Login;
