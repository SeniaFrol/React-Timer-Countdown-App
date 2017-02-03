import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';

import Main from './components/main.js';
import Timer from './components/timer.js';
import Countdown from './components/countdown.js';


class App extends Component {

  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Main}>
            <IndexRoute component={Timer} />
            <Route path="/timer" component={Timer}/>
            <Route path="/countdown" component={Countdown}/>
          </Route>
        </Router>
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
