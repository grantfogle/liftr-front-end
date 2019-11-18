import React, { Component } from 'react';
import TopNav from './TopNav/TopNav';
import SideNav from './SideNav/SideNav';
import ProgressDashboard from './Dashboards/ProgressDashboard';
import Workouts from './Workouts/Workouts';
import './Main.scss';
// i think i need to add another router inside this component.
class Main extends Component {
    state = {
    };
    render() {
        return (
            <div className="main">
                <TopNav />
                <div className="main__container">
                    <SideNav />
                    {/* <ProgressDashboard /> */}
                    <Workouts />
                </div>
            </div>
        );
    }
}

export default Main;