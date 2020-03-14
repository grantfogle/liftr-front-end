import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import './SideNav.scss';

class SideNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sideMenu: false,
            date: new Date()
        }
    }

    render() {
        return (
            <div class="side-nav">
                <h6>
                    <Link to="/dashboard">
                        <FontAwesomeIcon icon="chart-line" /> Dashboard
                </Link>
                </h6>
                <h6>Training</h6>
                <ul>
                    <li>
                        <Link to="/workouts"><FontAwesomeIcon icon="map-marker-alt" /> Find Workout</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="pen" /> Track Workout
                    </li>
                    <li>
                        <Link to="/goals"><FontAwesomeIcon icon="dumbbell" /> Update Goals</Link>
                    </li>
                </ul>
                <h6>My profile</h6>
                <ul>
                    <li><FontAwesomeIcon icon="cog" /> Settings</li>
                </ul>
            </div >
        )
    }
}

export default SideNav;