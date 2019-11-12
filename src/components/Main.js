import React, { Component } from 'react';
import Navigation from './Navigation';
import SideNav from './SideNav/SideNav';
import '../App.css';

class Main extends Component {
    state = {
    };
    render() {

        return (
            <div class="main">
                <Navigation />
                <SideNav />
                <div class="">
                    <p>Catjs</p>
                </div>
            </div>
        );
    }
}

export default Main;