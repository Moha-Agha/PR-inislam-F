import React, { useContext, useState } from "react";

import NavContext from '../../../../context/nav/navContext';

const SidenavSearch = () => {

    const navContext = useContext(NavContext)
    const { showSidebar, setSidebarItem, setSidebarSection } = navContext;

    const [result, setResult] = useState(false)

    return (
        <>
            <div className="sidenav_head">
                <span>Auf nicetwice.de suchen</span>
                <div
                    className="icon-circle"
                    onClick={() => {
                        showSidebar();
                        setTimeout(() => {
                            setSidebarItem('menu');
                            setSidebarSection('home');
                            setResult(false)
                        }, 800)
                    }}>
                    <i className="aicon-x"></i>
                </div>
            </div>

            <form className="search-input" onSubmit={(e) => { e.preventDefault(); }} role="search">
                <input id="search" type="search" placeholder="Search..." autofocus required />
                <button type="submit" onClick={() => { setResult(true) }}><i className="aicon-search"></i></button>
            </form>

            {result === true ? <h4 className='no-result'>Oops, es gibt kein Ergebnis</h4> : null}

        </ >
    );
}



export default SidenavSearch;
