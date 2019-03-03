import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Goals from './components/Goals';
import Schedule from './components/Schedule';
import SideMenu from './components/SideMenu/SideMenu';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

/* create a navigation
add interactivity
allow users to create goals
allow users to upload/track workouts
allow users to track/show progress
*/

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sideMenu: false,
    }
  }

  toggleSideMenu = () => {
    this.setState({ sideMenu: !this.state.sideMenu })
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Navigation toggleSideMenu={this.toggleSideMenu} />
        <SideMenu sideMenu={this.state.sideMenu} toggleSideMenu={this.toggleSideMenu} />
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
