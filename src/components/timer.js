import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          className="timer-line"
          style="filter: url(.#blur); transhtmlForm: rotate(-90deg) scaleY(-1); transhtmlForm-origin: center"></circle>

        <div className="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer-value-mins">02</span><!--
        --><span className="timer-value-dots">:</span><!--
        --><span className="timer-value-secs">00</span>
        </div>
      </svg>
    );
  }
}

export default Timer;
