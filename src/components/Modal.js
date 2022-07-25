import React from "react";
import "./Modal.css";
function Modal({ closeModal }) {
  return (
    <div className="modal">
      <div className="modal-container">
        <button className="close" onClick={() => closeModal(false)}>
          {" "}
          X{" "}
        </button>
        <input type="email" placeholder="Email" name="email" id="email" />
        <input
          type="text"
          placeholder="Password"
          name="password"
          id="password"
        />
        <button className="submit">Submit</button>
      </div>
    </div>
  );
}
export default Modal;
