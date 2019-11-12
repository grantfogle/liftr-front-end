import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './TopNav.scss';

const TopNav = ({ toggleSideMenu }) => {
    return (
        <header class="header">
            <nav class="d-flex justify-content-between align-items-center" >
                {/* <Navbar fixed="top" bg="dark" variant="dark"> */}
                <div class="logo text-white">GAINZ</div>

                <div>
                    <input placeholder="Search workouts" />
                </div>
                <p>User placeholder</p>
            </nav>
        </header>
    )
}

export default TopNav;