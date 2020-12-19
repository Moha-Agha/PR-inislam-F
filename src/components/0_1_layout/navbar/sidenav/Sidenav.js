import React, { useContext } from "react";

import NavContext from '../../../../context/nav/navContext';

import SidenavSearch from '../sidenavSearch/SidenavSearch';
import SidenavHead from './SidenavHead';
import SideBody from './SideBody';

const Sidenav = () => {
    const navContext = useContext(NavContext)
    const { sidebar, sidebarSection } = navContext;

    return (
        <div className={sidebar ? 'sidenav sidenavOpen' : 'sidenav'}>
            { sidebarSection === 'home' && <> <SidenavHead /><div className="sidenav_line" /> <SideBody /> </>}
            { sidebarSection === 'search' && <SidenavSearch />}
        </div >
    )

}

export default Sidenav
