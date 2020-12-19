import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className='container page-not-found'>
    <h1>404 - Not Found!</h1>
    <Link to="/">
      Go Home
    </Link>
  </div>
);

export default PageNotFound;