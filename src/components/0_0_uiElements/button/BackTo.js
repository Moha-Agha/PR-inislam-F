import React from "react";
import { Link } from 'react-router-dom';

const BackTo = ({ to = '/', title = 'Zurück zum Blog' }) => {
  return (
    <div className='back-to '>
      <Link to={to}>{title}<i className='aicon-left-arrow'></i></Link>
    </div>
  );
};

export default BackTo;
