import React, {Component} from 'react';
import Clock from './clock.js';
import CountdownForm from './countdownform.js';

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    };
  }
  componentDidUpdate(prevProp, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  }

  startTimer() {
    let timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >=0 ? newCount : 0
      });
    }, 1000);
  }

  handleSetCountdown (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  render() {
    var {count} = this.state;
    return(
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={e => this.handleSetCountdown(e)}/>
      </div>
    );
  }

}

export default Countdown;
