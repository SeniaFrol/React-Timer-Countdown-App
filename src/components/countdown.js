import React, {Component} from 'react';
import Clock from './clock.js';

class Countdown extends Component {
  render() {
    return(
      <div>
        <Clock totalSeconds={129} />
      </div>
    );
  }

}

export default Countdown;
