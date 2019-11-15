import React, { Component } from 'react';
import Main from './components/Main.js';
import Login from './components/Login/Login';
import Workouts from './components/Workouts/Workouts';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faUser, faChartLine, faCog, faDumbbell, faPen, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
{/* <i class="fas fa-tachometer-alt"></i> */}
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
    library.add(faChartLine, faUser, faSearch, faCog, faDumbbell, faPen, faMapMarkerAlt);
    return (
      <Router style={{ height: '100%' }}>
        <div>
          <Route exact path="/" component={() => <Login />} />
          <Route exact path="/main" component={() => <Main />} />
          <Route exact path="/workouts" component={() => <Workouts />} />
        </div>
      </Router>
    );
  }
}

export default App;
