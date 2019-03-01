import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Container>
          <Row>
            <Col>Stuff</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
