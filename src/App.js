import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import MiniNavigation from './components/MiniNavigation';
import Goals from './components/Goals';
import Schedule from './components/Schedule';
import SideMenu from './components/SideMenu/SideMenu';
import DailyWorkout from './components/DailyWorkout';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

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
      <div style={{ height: '100%' }}>
        <Navigation toggleSideMenu={this.toggleSideMenu} />
        <SideMenu sideMenu={this.state.sideMenu} toggleSideMenu={this.toggleSideMenu} />
        {/* <MiniNavigation /> */}
        {/* <DailyWorkout /> */}
        <Goals />
        <Schedule />
        <Container>
          <Row>
            <Col>Stuff</Col>
            <Col>Stuff</Col>
            <Col>Stuff</Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
