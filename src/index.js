import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.js';

class App extends Component {

  render() {
    return (
      <div>
        <Main />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
