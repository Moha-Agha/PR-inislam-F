import React, { useContext } from "react";
import { Link } from 'react-router-dom';

import NavContext from '../../../context/nav/navContext';

const FooterReduction = () => {
  const navContext = useContext(NavContext)
  const { currentNav, setCurrentNav } = navContext;


  const redirectionTitle = 'Na, möchtest du uns kontaktieren?';
  const redirectionTitleHome = 'Na, zurück zur Homepage?';

  return (
    <div className="reduction-footer">

      {currentNav === 'home' ?
        <>
          <h1>
            {redirectionTitleHome}
          </h1>
          <Link className='reduction-footer_arrow' to='/' onClick={() => { setCurrentNav('contact') }} ><i className='aicon-right-arrow'></i></Link>
        </>
        :
        <>
          <h1>
            {redirectionTitle}
          </h1>
          <Link className='reduction-footer_arrow' to='/contact' onClick={() => { setCurrentNav('home') }}><i className='aicon-right-arrow'></i></Link>
        </>
      }


    </div>
  );
};

export default FooterReduction;


