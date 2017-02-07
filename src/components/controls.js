import React, { Component } from 'react';

export default class Controls extends Component {
  render() {
    const {countdownStatus} = this.props;
    const renderStartStopButton = () => {
      if(countdownStatus === "started"){
        return <button classnNme="button secondary">Pause</button>
      } else if(countdownStatus === "paused") {
        return <button className="button primary">Start</button>
      }
    };

    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="button hollow alert">Clear</button>
      </div>
    );
  }
}
