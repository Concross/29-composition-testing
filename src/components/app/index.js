import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import React from 'react';
import Landing from '../landing';
import Dashboard from '../dashboard';


export default class App extends React.Component {
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
