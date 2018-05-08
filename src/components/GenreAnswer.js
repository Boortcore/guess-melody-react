import React, { Component } from 'react';

class GenreAnswer extends Component {
  render() {
    const {answer, onAnswer} = this.props;
    return (
      <div className="genre-answer">
        <div className="player-wrapper"></div>
        <input type="checkbox" name="answer" value={answer.genre} id={answer.id} checked={answer.checked} onClick={onAnswer}/>
        <label className="genre-answer-check" htmlFor={answer.id}>{answer.genre}</label>
      </div>
    );
  }
}

export default GenreAnswer;
