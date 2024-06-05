import React from "react";
import "./GetStartedButton.css";
const GetStartedButton = ({ label, onClick }) => {
  return (
    <button className="get-started-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default GetStartedButton;
