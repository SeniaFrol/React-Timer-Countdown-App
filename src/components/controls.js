import React, { Component } from 'react';

export default class Controls extends Component {
  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }

  render() {
    const {countdownStatus} = this.props;
    const renderStartStopButton = () => {
      if(countdownStatus === 'started'){
        return <button onClick={this.onStatusChange('paused')} className="button secondary">Pause</button>
      } else {
        return <button onClick={this.onStatusChange('started')} className="button primary">Start</button>
      }
    };

    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="button hollow alert" onClick={this.onStatusChange('stopped')} >Clear</button>
      </div>
    );
  }
}
