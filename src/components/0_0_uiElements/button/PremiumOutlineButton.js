import React from "react";
import { Link } from 'react-router-dom';

const PremiumOutlineButton = ({ title, goTo = '/' }) => {
  return (
    <Link to={goTo} type="button" className="premium-outline-button" >
      {title}
    </Link>
  );
};

export default PremiumOutlineButton;
