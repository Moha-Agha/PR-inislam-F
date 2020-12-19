import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';

import NavContext from '../../../../context/nav/navContext';
import AuthContext from '../../../../context/auth/authContext';

import Login from '../../../2_auth/Login'
import Profile from '../../../2_auth/Profile'

function SideBody() {
    const navContext = useContext(NavContext)
    const { showSidebar, sidebarItem } = navContext;

    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;

    const location = useLocation().pathname;

    let navContent
    let adminNavContent
    let userNavContent



    //add class active on the actual label
    let activeLable = (lable) => { if (location === lable) return 'active-label' }


    userNavContent = (
        <>
            <Link to='/' className={activeLable('/')} onClick={showSidebar}>Home</Link>
            <Link to='/portfolio' className={activeLable('/portfolio')} onClick={showSidebar}>Portfolio</Link>
            <Link to='/service' className={activeLable('/service')} onClick={showSidebar}>Service</Link>
            <Link to='/contact' className={activeLable('/contact')} onClick={showSidebar}>Kontakt</Link>
        </>
    )

    adminNavContent = (
        isAuthenticated ?
            <>
                <div className='admin-nav'>admin</div>
                <Link to='/messages' className={activeLable('/messages')} onClick={showSidebar}>Message</Link>
                <Link to='/section' className={activeLable('/section')} onClick={showSidebar}>Section</Link>
                <Link to='/article' className={activeLable('/article')} onClick={showSidebar}>Article</Link>
                <Link to='/images' className={activeLable('/images')} onClick={showSidebar}>Images</Link>
            </>
            : null
    )

    switch (sidebarItem) {
        case 'login':
            navContent = <Login />
            break;
        case 'profile':
            navContent = <Profile />
            break;
        default:
        case 'home':
            navContent = <>{userNavContent}{adminNavContent}</>
            break;
    }

    return (
        <nav >
            {navContent}
        </nav>
    )
}

export default SideBody
