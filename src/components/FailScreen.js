import React, { Component } from 'react';
import {connect} from 'react-redux'
import {startNewGame} from '../AC'
class FailScreen extends Component {
  render() {

    return (
      <section className="main main--result">
        <section className="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <h2 className="title">Вы проиграли</h2>
        <div className="main-stat">Ничего, вам повезет в следующий раз</div>
        <span onClick={this.onClick} role="button" tabIndex="0" className="main-replay">Сыграть ещё раз</span>
      </section>
    );
  }

  onClick = () => {
    this.props.startNewGame()
  }
}

export default connect(null, {startNewGame})(FailScreen);
