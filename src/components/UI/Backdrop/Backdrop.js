import "./Backdrop.css";
import React from "react";
import ReactDOM from "react-dom";

const portalElement = document.getElementById("backdrop");

function Backdrop({ onHideCart }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div onClick={onHideCart} className="backdrop" />,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Backdrop;
