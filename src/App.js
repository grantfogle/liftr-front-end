import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Goals from './components/Goals';
import Schedule from './components/Schedule';
import Main from './components/Main.js';
import Login from './components/Login';
import SideMenu from './components/SideMenu/SideMenu';
import DailyWorkout from './components/DailyWorkout';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* create a navigation
add interactivity
allow users to create goals
allow users to upload/track workouts
allow users to track/show progress
i think i want days of the week
*/

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sideMenu: false,
      date: new Date()
    }
  }

  toggleSideMenu = () => {
    this.setState({ sideMenu: !this.state.sideMenu })
  }

  render() {
    // console.log(this.state.date)
    return (
      <Router style={{ height: '100%' }}>
        <div>
          <Route exact path="/" component={() => <Login />} />
          <Route exact path="/main" component={() => <Main />} />
          {/* <Route exact path="/login" component={() => <Login />} />
            <Route exact path="/new-goal" component={() => <NewGoals />} /> */}
          {/* <Goals /> */}
          {/* <Schedule /> */}
          {/* </div>
          <Footer />
        </div> */}
        </div>
      </Router>
    );
  }
}

export default App;
