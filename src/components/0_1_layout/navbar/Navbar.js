import React, { useContext } from 'react';
import NavContext from '../../../context/nav/navContext'

import Logo from '../../0_0_uiElements/Logo'
import Sidenav from './sidenav/Sidenav'

const Navbar = () => {

  const navContext = useContext(NavContext)
  const { showSidebar, setSidebarSection } = navContext;


  return (
    < div id='nav' className="navbar" >
      <Sidenav />
      <Logo logo='nicetwice_logo' type='.png' />
      <div className="navbar_items">
        <div className="icon-circle" onClick={() => { setSidebarSection('search'); showSidebar() }}><i className="aicon-search"></i></div>
        <div className="icon-circle" onClick={showSidebar}><i className="aicon-menu"></i></div>
      </div>
    </div >
  );
};


export default Navbar;

