import React, { Component } from 'react';
import TopNav from './TopNav/TopNav';
import SideNav from './SideNav/SideNav';
import Dashboard from './Dashboards/ProgressDashboard';
import Workouts from './Workouts/Workouts';
import Goals from './Goals/Goals';
import { BrowserRouter as Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import './Main.scss';
class Main extends Component {
    render() {
        return (
            <div className='main'>
                <TopNav />
                <div className='main__container'>
                    <SideNav />
                    <div class='main__container__primary-content'>
                        {/* <Switch>
                            <Route path='/goals' component={Goals} />
                            <Route path='/dashboard' component={Dashboard} />
                            <Route path='/workouts' component={Workouts} />
                        </Switch> */}
                        {/* <Dashboard /> */}
                        {/* <Workouts /> */}
                        <Goals />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;