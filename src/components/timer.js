import React, {Component} from 'react';
import Clock from './clock.js';
import Controls from './controls.js';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      timerStatus: 'stopped'
    };
  }
  
  componentDidUpdate(prevProp, prevState) {
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          break;
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  startTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  }


  handleStatusChange(newStatus) {
    this.setState({timerStatus: newStatus});
  }

  render() {
    const {count, timerStatus} = this.state;
    return(
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={(newStatus) => this.handleStatusChange(newStatus)} />
      </div>
    );
  }
}

export default Timer;
