import React from "react";

const Logo = ({ logo = 'logo_nav', type = '.png', slogan, mobile }) => {

  let fullPath
  if (mobile) fullPath = require('../../media/image/' + logo + '_mobile' + type);
  else fullPath = require('../../media/image/' + logo + type);

  return (
    <a href='/' className='logo'>
      {fullPath ? <img src={fullPath} alt="inislam logo" /> : <h2 className='logo-title'>inislam.net</h2>}
      {!mobile && <p className='slogan'>{slogan && slogan}</p>}
    </a >
  );
};

export default Logo;

