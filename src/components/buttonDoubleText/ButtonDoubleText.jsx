import React from "react";
import "./buttonDoubleText.css";

const ButtonDoubleText = ({ text }) => {
  return (
    <button>
      <span className="double-text">
        <span data-text={text}>{text}</span>
      </span>
    </button>
  );
};

export default ButtonDoubleText;
