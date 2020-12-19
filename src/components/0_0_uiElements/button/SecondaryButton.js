import React from "react";

const SecondaryButton = ({ title = "", className }) => {
  return (
    <a href="#" className={`secondary-button ${className}`}>
      {title}
    </a>
  );
};

export default SecondaryButton;
