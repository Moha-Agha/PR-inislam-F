import React from "react";
import { Link } from 'react-router-dom';

const TopPageButton = ({ title = "", goTo = '/', className = "" }) => {
  return (
    <Link to={goTo} className={`top-page-button ${className}`}>
      {title}
    </Link>
  );
};

export default TopPageButton;
