import React, { Component } from 'react';
import TopNav from './TopNav/TopNav';
import SideNav from './SideNav/SideNav';
import ProgressDashboard from './Dashboards/ProgressDashboard';
import Workouts from './Workouts/Workouts';
import Goals from './Goals/Goals';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import './Main.scss';
class Main extends Component {
    render() {
        return (
            <div className="main">
                <TopNav />
                <div className="main__container">
                    <SideNav />
                    <Switch>
                        <Route path="/main/dashboard" component={ProgressDashboard} />
                        <Route path="/main/workouts" component={Workouts} />
                        <Route path="/main/goals" component={Goals} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Main;