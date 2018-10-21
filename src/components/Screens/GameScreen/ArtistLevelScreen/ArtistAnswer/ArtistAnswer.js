import React from 'react';

function ArtistAnswer(props) {
  const {index, answer: {isCorrect, image, title}, onclick} = props;
  return (
    <div className="main-answer-wrapper">
      <input onClick={onclick} className="main-answer-r" type="radio" id={"answer-" + index} name="answer"
             value={isCorrect}/>
      <label className="main-answer" htmlFor={"answer-" + index}>
        <img className="main-answer-preview" src={image.url} alt="description"/>
        {title}
        <br/>
        {isCorrect.toString()}
      </label>
    </div>
  );
}

export default ArtistAnswer;
