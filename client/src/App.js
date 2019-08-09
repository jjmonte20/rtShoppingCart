import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
