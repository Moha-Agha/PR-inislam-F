import React from "react";
import { Link } from 'react-router-dom';

const PremiumButton = ({ title, goTo = '/' }) => {
  return (
    <Link to={goTo} type="button" className="premium-button" >
      {title}
    </Link>
  );
};

export default PremiumButton;
