import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children, onHideCart }) {
  const portalElement = document.getElementById("modal");

  const modalElement = (
    <div className="modal">
      <div>{children}</div>
    </div>
  );

  return (
    <React.Fragment>
      <Backdrop onHideCart={onHideCart} />
      {ReactDOM.createPortal(modalElement, portalElement)}
    </React.Fragment>
  );
}

export default Modal;
