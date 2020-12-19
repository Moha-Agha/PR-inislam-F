import React, { useState, useEffect } from "react";



const Logo = ({ logo = 'logo_nav', type = '.png' }) => {

  const [path, setPath] = useState('');
  const [slogan, setSlogan] = useState('');

  useEffect(() => {
    resizeScreen();
    window.addEventListener('resize', resizeScreen)
  });

  function resizeScreen() {
    let fullPath
    let text

    if (window.innerWidth <= 750) {
      fullPath = require('../../media/image/' + logo + '_mobile' + type);

    } else {
      fullPath = require('../../media/image/' + logo + type);
    }

    setSlogan(text)
    setPath(fullPath)
  }


  return (
    <a href='/' className='logo'>
      {path ? <img src={path} alt="niceTwice logo" /> : <h2 className='logo-title'>niceTwice</h2>}
      <h5>{slogan}</h5>
    </a >
  );
};

export default Logo;
