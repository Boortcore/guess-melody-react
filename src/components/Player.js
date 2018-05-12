import React, { Component } from 'react';

class Player extends Component {
  constructor() {
    super();
    this.player = null;
  }
  render() {
    return (
      <div className="player">
        <audio ref={node => this.player = node} src={this.props.src}></audio>
        <button onClick={this.onClickPlay} className="player-control">Play</button>
        <div className="player-track">
          <span className="player-status"></span>
        </div>
      </div>
    );
  }
  onClickPlay = (e) => {
    e.preventDefault();
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default Player;
