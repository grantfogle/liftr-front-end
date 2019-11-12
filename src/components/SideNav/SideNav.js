import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SideNav.scss';

const SideNav = ({ toggleSideMenu }) => {
    return (
        <div class="side-nav">
            <h5><FontAwesomeIcon icon="chart-line" /> Dashboard</h5>
            <h5>Training</h5>
            <ul>
                <li><FontAwesomeIcon icon="map-marker-alt" /> Find Workout</li>
                <li><FontAwesomeIcon icon="pen" /> Track Workout</li>
                <li><FontAwesomeIcon icon="dumbbell" /> Update Goals</li>
            </ul>
            <h5>My profile</h5>
            <ul>
                <li><FontAwesomeIcon icon="cog" /> Settings</li>
            </ul>
        </div>
    )
}

export default SideNav;