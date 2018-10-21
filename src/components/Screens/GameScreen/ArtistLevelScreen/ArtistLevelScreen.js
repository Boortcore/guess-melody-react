import React from 'react';
import ArtistAnswer from './ArtistAnswer/index';
import Timer from '../../../Timer';
import Player from '../../../Player/Player';

function ArtistLevelScreen(props) {
    const {question: {src, title, answers}, onClickAnswer} = props;
    return (
      <section className="main main--level main--level-artist">
        <Timer/>
        <div className="main-wrap">
          <h2 className="title main-title">Кто исполняет эту песню?</h2>
          <div className="player-wrapper"><Player src={src}/></div>
          <form className="main-list">
            {answers.map((answer, index) => {
              return <ArtistAnswer key={title} index={index} answer={answer} onclick={onClickAnswer}/>
            })}
          </form>
        </div>
      </section>
    );
}

export default ArtistLevelScreen;
