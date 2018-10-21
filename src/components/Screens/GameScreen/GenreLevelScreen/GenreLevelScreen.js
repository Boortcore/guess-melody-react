import React from 'react';
import GenreAnswer from './GenreAnswer/index';
import Timer from '../../../Timer'

function isDisabled(choosedAnswers) {
  return !Object.values(choosedAnswers).some(answer => answer.checked)
}

function GenreLevelScreen(props) {
  const {question, onClickAnswer, choosedAnswers, onChooseAnswer} = props;
  return (
    <section className="main main--level main--level-genre">
      <Timer/>
      <div className="main-wrap">
        <h2 className="title">{question.question}</h2>

        <form className="genre">
          {question.answers.map((answer, index) => {
            return <GenreAnswer key={answer.src} answer={choosedAnswers[`a-` + index]} onChooseAnswer={onChooseAnswer}/>
          })}
          <button disabled={isDisabled(choosedAnswers)} onClick={onClickAnswer} className="genre-answer-send"
                  type="submit">Ответить
          </button>
        </form>
      </div>
    </section>
  );
}

export default GenreLevelScreen;
