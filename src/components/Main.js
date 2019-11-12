import React, { Component } from 'react';
import TopNav from './TopNav/TopNav';
import SideNav from './SideNav/SideNav';
import ProgressDashboard from './Dashboards/ProgressDashboard';
import './Main.scss';

class Main extends Component {
    state = {
    };
    render() {
        return (
            <div className="main">
                <TopNav />
                <div className="main__container">
                    <SideNav />
                    <ProgressDashboard />
                </div>
            </div>
        );
    }
}

export default Main;