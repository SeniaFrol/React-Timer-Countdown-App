import React, { Component } from 'react';

export default class Clock extends Component {

  formatSeconds(totalSeconds) {
    let seconds = totalSeconds % 60;
    let minuts = Math.floor(totalSeconds / 60);

    if(seconds < 10) {
      seconds = '0' + seconds;
    }
    if(minuts < 10) {
      minuts = '0' + minuts;
    }

    return minuts + ':' + seconds;
  }

  render() {
    const {totalSeconds} = this.props;

    return(
      <div className='clock'>
        <span className='clock-text'>
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
}

Clock.defaultProps = {
  totalSeconds: 0
};

Clock.propTypes = {
  totalSeconds: React.PropTypes.number
};
