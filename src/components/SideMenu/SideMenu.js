import React from 'react';
import './SideMenu.css';
import { Link } from 'react-router-dom';

const SideMenu = ({ sideMenu, toggleSideMenu }) => {
    return (
        <nav className={sideMenu ? "side-menu" : "side-menu-hidden"}>
            <ul>
                <li onClick={toggleSideMenu}>Close X</li>
                <Link to="/goals">
                    <li>Add a new workout</li>
                </Link>
                <li>Track Progress</li>
                <li>Record a new workout</li >
            </ul >
        </nav >
    )
}

export default SideMenu;