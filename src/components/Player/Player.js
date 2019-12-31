import React from 'react';

function Player({registerPlayerNode, src,  paused, onClick}) {
    return (
      <div className="player">
        <audio ref={registerPlayerNode} src={src}></audio>
        <button onClick={onClick} className="player-control">{paused ? 'Pause': 'Play'}</button>
        <div className="player-track">
          <span className="player-status"></span>
        </div>
      </div>
    )
}

export default Player;
