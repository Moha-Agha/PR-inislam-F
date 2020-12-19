import React, { useContext, useEffect } from 'react'

import NavContext from '../../../../context/nav/navContext';
import AuthContext from '../../../../context/auth/authContext';

function SidenavHead() {

    const navContext = useContext(NavContext)
    const { showSidebar, setSidebarItem, setCurrentNav } = navContext;

    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, loadUser } = authContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    const onLogout = () => {
        logout();
        setCurrentNav('home')
    };

    const authLinks = (
        <>
            <span onClick={() => { setSidebarItem('profile') }}>Hello Admin</span>
            /
            <span onClick={onLogout}>Logout</span>
        </>
    );
    const guestLinks = (
        <>
            <span onClick={() => { setSidebarItem('login'); }}>Einloggen</span> / <span onClick={() => { }} className="disable-link">Registrieren</span>
        </>
    );
    return (
        <div className="sidenav_head">
            {isAuthenticated ? authLinks : guestLinks}
            <div className="icon-circle" onClick={() => { showSidebar(); setTimeout(() => { setSidebarItem('menu') }, 800) }}><i className="aicon-x"></i></div>
        </div>
    )
}

export default SidenavHead
