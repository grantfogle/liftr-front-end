import React, { Component } from 'react';
import Main from './components/Main.js';
import Login from './components/Login/Login';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    return (
      <Router style={{ height: '100%' }}>
        <div>
          <Route exact path="/" component={() => <Login />} />
          <Route exact path="/main" component={() => <Main />} />
        </div>
      </Router>
    );
  }
}

export default App;
