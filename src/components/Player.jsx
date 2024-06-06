import React, { Component } from 'react';

class Player extends Component {
  constructor() {
    super();
    this.state = {
      paused: false,
    };
    this.player = null;
  }
  render() {
    const { paused } = this.state;
    return (
      <div className="player">
        <audio
          ref={(node) => (this.player = node)}
          src={this.props.src}
        ></audio>
        <button onClick={this.onClickPlay} className="player-control">
          {paused ? 'Pause' : 'Play'}
        </button>
        <div className="player-track">
          <span className="player-status"></span>
        </div>
      </div>
    );
  }
  onClickPlay = (e) => {
    e.preventDefault();
    const { paused } = this.player;
    this.setState({ paused });
    if (paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  };
}

export default Player;
