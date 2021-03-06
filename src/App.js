import React, { Component } from 'react';
import Main from './components/Main.js';
import Login from './components/Login/Login';
import Goals from './components/Goals/Goals';
import './index.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faUser, faChartLine, faCog, faDumbbell, faPen, faMapMarkerAlt, faRunning, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sideMenu: false,
      date: new Date()
    }
  }

  render() {
    library.add(faChartLine, faUser, faSearch, faCog, faDumbbell, faPen, faMapMarkerAlt, faRunning, faEllipsisV);
    return (
      <Router>
        <div className='app'>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/main' component={Main} />
            {/* <Route path='/goals' component={Goals} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
