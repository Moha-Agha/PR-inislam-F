import React from "react";
import { Link } from 'react-router-dom';

const PremiumOutlineButton = ({ title, goTo = '/', className = '' }) => {
  let allClasses = `premium-outline-button ${className}`

  return (
    <Link to={goTo} type="button" className={allClasses} >
      {title}
    </Link>
  );
};

export default PremiumOutlineButton;
