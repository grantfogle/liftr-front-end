import React, { Component } from 'react';
import TopNav from './TopNav/TopNav';
import SideNav from './SideNav/SideNav';
import ProgressDashboard from './Dashboards/ProgressDashboard';
import Workouts from './Workouts/Workouts';
import Goals from './Goals/Goals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
                    <Router>
                        <div>
                            <Route path="/main/dashboard" render={() => <ProgressDashboard />} />
                            <Route path="/main/workouts" render={() => <Workouts />} />
                            <Route path="/main/goals" render={() => <Goals />} />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default Main;