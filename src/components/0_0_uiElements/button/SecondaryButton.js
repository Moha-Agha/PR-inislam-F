import React from "react";
import { Link } from 'react-router-dom';

const SecondaryButton = ({ title = "", goTo = '/', className = "" }) => {
  return (
    <Link to={goTo} className={`secondary-button ${className}`}>
      {title}
    </Link>
  );
};

export default SecondaryButton;
