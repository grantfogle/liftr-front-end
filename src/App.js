import React, { Component } from 'react';
import Main from './components/Main.js';
import Login from './components/Login/Login';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUser, faChartLine, faCog, faDumbbell, faPen, faMapMarkerAlt, faRunning} from '@fortawesome/free-solid-svg-icons'
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
    library.add(faChartLine, faUser, faSearch, faCog, faDumbbell, faPen, faMapMarkerAlt, faRunning);
    return (
      <Router style={{ height: '100%' }}>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/main" component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;
