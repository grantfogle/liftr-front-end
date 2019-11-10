import React, { Component } from 'react';
import Navigation from './Navigation';
import '../App.css';

class Main extends Component {
    state = {
    };
    render() {

        return (
            <div class="main">
                <Navigation />
                <div class="">
                    <p>Catjs</p>
                </div>
            </div>
        );
    }
}

export default Main;