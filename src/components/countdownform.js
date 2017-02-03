import React, {Component} from 'react';

class CountdownForm extends Component {

  onSubmitForm(e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }
  render() {
    return(
      <div>
        <form ref="form" onSubmit={e => this.onSubmitForm(e)} className='countdown-form'>
          <input type="text" ref="seconds" placeholder="Enter time, sec" />
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
}

export default CountdownForm;
