import React, { Component } from 'react';
import {GENRE_TYPE, ARTIST_TYPE} from '../../../constants/index'
import GenreLevelScreen from './GenreLevelScreen/index';
import ArtistLevelScreen from './ArtistLevelScreen/index';
import Preloader from '../../Preloader/Preloader';

class GameScreen extends Component {
  componentDidMount() {
    this.props.loadQuestionsRequest()
  }
  render() {
    if (this.props.loading) return <Preloader/>;
    const {question: {type}, goToNextScreen, question, levelNumber} = this.props;
    const NextScreen = this.getNextScreen(type);
    return (
      <NextScreen key={levelNumber} goToNextScreen={goToNextScreen} question={question}/>
    );
  }
  getNextScreen = (type) => {
    switch (type) {
      case GENRE_TYPE:
        return GenreLevelScreen;
      case ARTIST_TYPE:
        return ArtistLevelScreen;
      default:
        return null;
    }
  }
}

export default GameScreen;
