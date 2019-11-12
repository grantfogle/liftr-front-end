import React from 'react';
import './SideNav.scss';

const SideNav = ({ toggleSideMenu }) => {
    return (
        <div class="side-nav">
            <h6>Dashboard</h6>
            <h6>Training</h6>
            <ul>
                <li>Find Workout</li>
                <li>Track Workout</li>
                <li>Update Goals</li>
            </ul>
            <h6>My profile</h6>
            <ul>
                <li>Settings</li>
            </ul>
        </div>
    )
}

export default SideNav;