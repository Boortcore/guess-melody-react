import React, { Component } from 'react';
import {connect} from 'react-redux'
import {startNewGameRequest, loadAllResultsRequest} from '../AC'
import Preloader from './Preloader'


class SuccessScreen extends Component {
  componentDidMount() {
    this.props.loadAllResultsRequest()
  }
  render() {
    if (this.props.loading) return <Preloader/>;
    return (
      <section className="main main--result">
        <section className="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
          {this.getDescription()}
        <span onClick={this.onClickToNewGame} role="button" tabIndex="0" className="main-replay">Старт</span>
      </section>
    );
  }

  getDescription() {
    const id = this.props.match.params.id;
    const currentResult = this.props.results.find(result => result.id == id);
    if (!currentResult) return (
      <div>
        <h2 className="title">Результата с заданным ID <br/> не существует</h2>
        <div className="main-stat">Введите корректный ID</div>
        <span  className="main-comparison">или начните игру, нажав кнопку старт</span>
      </div>
    );

    const {time, correctAnswers} = currentResult;

    return (
      <div>
        <h2 className="title">Вы настоящий меломан!</h2>
        <div className="main-stat">За&nbsp;{time}&nbsp;минуты вы&nbsp;отгадали {correctAnswers}&nbsp;мелодии</div>
        <span  className="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
      </div>
    )
  }
  onClickToNewGame = () => {
    this.props.startNewGameRequest()
  }
}

export default connect(state => ({
  correctAnswers: state.game.correctAnswers,
  loading: state.info.loading,
  results: state.info.results
}), {startNewGameRequest, loadAllResultsRequest})(SuccessScreen);
