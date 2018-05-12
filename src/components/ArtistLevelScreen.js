import React, { Component } from 'react';
import ArtistAnswer from './ArtistAnswer';
import Timer from './Timer';
import Player from './Player';

class ArtistLevelScreen extends Component {
  render() {
    const {question} = this.props;
    return (
      <section className="main main--level main--level-artist">
        <Timer/>
        <div className="main-wrap">
          <h2 className="title main-title">Кто исполняет эту песню?</h2>
          <div className="player-wrapper"><Player src={question.src}/></div>
          <form className="main-list">
            {question.answers.map((answer, index) => {
              return <ArtistAnswer key={answer.title} index={index} answer={answer} onclick={this.onClickAnswer}/>
            })}
          </form>
        </div>
      </section>
    );
  }
  onClickAnswer = (e) => {
    e.preventDefault();
    const answer = e.target.value === 'true';
    this.props.goToNextScreen(answer);
  }
}

export default ArtistLevelScreen;
