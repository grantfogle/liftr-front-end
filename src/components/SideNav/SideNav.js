import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SideNav.scss';

const SideNav = ({ toggleSideMenu }) => {
    return (
        <div class="side-nav">
            <h6><FontAwesomeIcon icon="chart-line" /> Dashboard</h6>
            <h6>Training</h6>
            <ul>
                <li><FontAwesomeIcon icon="map-marker-alt" /> Find Workout</li>
                <li><FontAwesomeIcon icon="pen" /> Track Workout</li>
                <li><FontAwesomeIcon icon="dumbbell" /> Update Goals</li>
            </ul>
            <h6>My profile</h6>
            <ul>
                <li><FontAwesomeIcon icon="cog" /> Settings</li>
            </ul>
        </div>
    )
}

export default SideNav;