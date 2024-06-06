import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeTimeRequest} from "../AC/index"
import {getTime} from "../selectors/index"
import {MAX_TIME, RADIUS} from "../constants/index"

class Timer extends Component {
  constructor() {
    super();
    this.state = {};
    this.lengthRound = Math.round(2 * Math.PI * RADIUS);
    this.shadowRound = this.lengthRound / (MAX_TIME);
  }
  componentDidMount() {
    this.changeTime();
    this._interval = setInterval(() => {
      this.props.changeTimeRequest();
      this.changeTime();
    }, 1000)
  }
  changeTime() {
    const {time} = this.props;
    const timerView = this.shadowRound * (MAX_TIME - time);
    this.setState({timerView});
  }
  render() {
    const {time} = this.props;
    const minutes = String(Math.floor(time / 60)).padStart(2, `0`);
    const seconds = String(Math.floor(time % 60)).padStart(2, `0`);
    return (
      <div className="main-timer">
        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780" strokeDasharray={this.lengthRound}
             strokeDashoffset={this.state.timerView}>
          <circle
            cx="390" cy="390" r="370"
            className="timer-line"
            style={{filter: 'url(#blur)',  transform: 'rotate(-90deg) scaleY(-1)', transformOrigin: 'center'}}>
          </circle>
        </svg>
        <div className="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer-value-mins">{minutes}</span>
          <span className="timer-value-dots">:</span>
          <span className="timer-value-secs">{seconds}</span>
        </div>
      </div>

    );
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
}

export default connect(state => ({
  time: getTime(state)
}), {changeTimeRequest})(Timer);
