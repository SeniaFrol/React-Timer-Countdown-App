import React, {Component} from 'react';
import Clock from './clock.js';
import CountdownForm from './countdownform.js';
import Controls from './controls.js';

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
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >=0 ? newCount : 0
      });
    }, 1000);
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  handleStatusChange(newStatus) {
    this.setState({countdownStatus: newStatus});
  }

  render() {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if(countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={(newStatus) => this.handleStatusChange(newStatus)} />
      } else {
        return <CountdownForm onSetCountdown={e => this.handleSetCountdown(e)}/>
      }
    };
    return(
      <div>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }

}

export default Countdown;
