import React from 'react';
import {getStatistic} from "../../../utils/index"
import Preloader from '../../Preloader/Preloader'

function getDescription(props) {
  const {id} = props.match.params;
  const {results} = props;
  const currentResult = results.find(result => Number(result.id) === Number(id));

  if (!currentResult) return (
    <div>
      <h2 className="title">Результата с заданным ID <br/> не существует</h2>
      <div className="main-stat">Введите корректный ID</div>
      <span className="main-comparison">или начните игру, нажав кнопку старт</span>
    </div>
  );

  const percent = getStatistic(results, currentResult.id);
  const {time, correctAnswers} = currentResult;
  const minutes = String(parseInt(time / 60, 10)).padStart(2, `0`);
  const seconds = String(time % 60).padStart(2, `0`);
  return (
    <div>
      <h2 className="title">Вы настоящий меломан!</h2>
      <div className="main-stat">За&nbsp;{minutes}:{seconds}&nbsp;минуты вы&nbsp;отгадали {correctAnswers}&nbsp;
        мелодии
      </div>
      <span className="main-comparison">Это&nbsp;лучше чем у&nbsp;{percent}%&nbsp;игроков</span>
    </div>
  )
}

function SuccessScreen(props) {
  const {loading, onClick} = props;
  if (loading) return <Preloader/>;
  return (
    <section className="main main--result">
      <section className="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      {getDescription(props)}
      <span onClick={onClick} role="button" tabIndex="0" className="main-replay">Старт</span>
    </section>
  )
}

export default SuccessScreen;
