import React, { Component } from 'react';
import TopNav from './TopNav/TopNav';
import SideNav from './SideNav/SideNav';
import '../App.css';

class Main extends Component {
    state = {
    };
    render() {

        return (
            <div class="main">
                <TopNav />
                <SideNav />
                {/* <ProgressDashboard /> */}
            </div>
        );
    }
}

export default Main;