import React from 'react';
import Player from '../../../../Player'

function GenreAnswer(props) {
  const {answer: {src, id, genre, checked}, onChooseAnswer} = props;
  return (
    <div className="genre-answer">
      <div className="player-wrapper"><Player src={src}/></div>
      <input type="checkbox" name="answer" value={genre} id={id} checked={checked} onClick={onChooseAnswer}/>
      <label className="genre-answer-check" htmlFor={id}>{genre}</label>
    </div>
  );
}

export default GenreAnswer;
