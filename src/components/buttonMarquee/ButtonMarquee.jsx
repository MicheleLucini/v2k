import React from "react";
import "./buttonMarquee.css";

const ButtonMarquee = ({ text }) => {
  return (
    <button className="marquee">
      <div>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </button>
  );
};

export default ButtonMarquee;
