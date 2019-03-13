import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Goals from './components/Goals';
import Schedule from './components/Schedule';
import SideMenu from './components/SideMenu/SideMenu';
import DailyWorkout from './components/DailyWorkout';
import Footer from './components/Footer';
import NewGoals from './components/NewGoals';
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
    console.log(this.state.date)
    return (
      <Router>
        <div style={{ height: '100%' }}>
          <Navigation toggleSideMenu={this.toggleSideMenu} />
          <SideMenu sideMenu={this.state.sideMenu} toggleSideMenu={this.toggleSideMenu} />
          <div className="main">
            {/* <DailyWorkout /> */}
            <div>
              {/* <Route exact path="/" component={() => <Home />} /> */}
              <Route exact path="/goal" component={() => <Goals />} />
              <Route exact path="/new-goal" component={() => <NewGoals />} />
            </div>
            <Goals />
            {/* <Schedule /> */}
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
