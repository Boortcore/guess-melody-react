import React from 'react';
import {GENRE_TYPE, ARTIST_TYPE} from '../../../constants/index'
import GenreLevelScreen from './GenreLevelScreen/index';
import ArtistLevelScreen from './ArtistLevelScreen/index';
import Preloader from '../../Preloader/Preloader';

const getNextScreen = (type) => {
  switch (type) {
    case GENRE_TYPE:
      return GenreLevelScreen;
    case ARTIST_TYPE:
      return ArtistLevelScreen;
    default:
      return null;
  }
}

function GameScreen(props) {
  if (props.loading) return <Preloader/>;
  const {question: {type}, goToNextScreen, question, levelNumber} = props;
  const NextScreen = getNextScreen(type);
  return (
    <NextScreen key={levelNumber} goToNextScreen={goToNextScreen} question={question}/>
  )
}

export default GameScreen;
