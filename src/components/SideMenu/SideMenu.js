import React from 'react';
import './SideMenu.css';

const SideMenu = ({ sideMenu, toggleSideMenu }) => {
    return (
        <nav className={sideMenu ? "side-menu" : "side-menu-hidden"}>
            <ul>
                <li onClick={toggleSideMenu}>Close X</li>
                <li><a href="#"></a>Add a new goal</li>
                <li><a href="#"></a>Add a new workout</li>
                <li><a href="#"></a>Track Progress</li>
                <li><a href="#"></a>Record a new workout</li>
            </ul>
        </nav>
    )
}

export default SideMenu;