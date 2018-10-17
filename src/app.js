'use strict';

import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1>TODO List</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </nav>
          <div id="main-content">
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));