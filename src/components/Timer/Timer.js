import React from 'react';

function Timer(props) {
  const {strokeDashoffset, strokeDasharray} = props.timerView;
  const {minutes, seconds} = props.formatTime;
  return (
    <div className="main-timer">
      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780" strokeDasharray={strokeDasharray}
           strokeDashoffset={strokeDashoffset}>
        <circle
          cx="390" cy="390" r="370"
          className="timer-line"
          style={{filter: 'url(#blur)', transform: 'rotate(-90deg) scaleY(-1)', transformOrigin: 'center'}}>
        </circle>
      </svg>
      <div className="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer-value-mins">{minutes}</span>
        <span className="timer-value-dots">:</span>
        <span className="timer-value-secs">{seconds}</span>
      </div>
    </div>
  )
}

export default Timer;
