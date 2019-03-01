import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Goals from './components/Goals';
import logo from './logo.svg';
import './App.css';

/* create a navigation
add interactivity
allow users to create goals
allow users to upload/track workouts
allow users to track/show progress
*/

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Goals />
        <Container>

          <Row>
            <Col>Stuff</Col>
            <Col>Stuff</Col>
            <Col>Stuff</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
