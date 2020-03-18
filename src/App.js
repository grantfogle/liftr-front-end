import React, { Component } from 'react';
import Main from './components/Main.js';
import Login from './components/Login/Login';
import Goals from './components/Goals/Goals';
import './index.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faUser, faChartLine, faCog, faDumbbell, faPen, faMapMarkerAlt, faRunning } from '@fortawesome/free-solid-svg-icons';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sideMenu: false,
      date: new Date()
    }
  }

  render() {
    library.add(faChartLine, faUser, faSearch, faCog, faDumbbell, faPen, faMapMarkerAlt, faRunning);
    return (
      <Router>
        <div className='app'>
          <Route path='/login' component={Login} />
          <Route path='/main' component={Main} />
          <Route path='/goals' component={Goals} />
        </div>
      </Router>
    );
  }
}

export default App;
