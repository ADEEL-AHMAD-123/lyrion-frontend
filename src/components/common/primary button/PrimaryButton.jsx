import React from "react";
import { Link } from "react-router-dom";
import "./PrimaryButton.scss";

const PrimaryButton = ({ text, to = "", onClick, className = "", hideOnMobile = false }) => {
  const buttonClasses = `btn-primary ${hideOnMobile ? "hide-on-mobile" : ""} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClasses} onClick={onClick}>
        {text}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryButton;
