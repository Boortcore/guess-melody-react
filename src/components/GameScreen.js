import React, { Component } from 'react';
import {GENRE_TYPE, ARTIST_TYPE} from '../constants'
import GenreLevelScreen from './GenreLevelScreen/GenreLevelScreen';
import ArtistLevelScreen from './ArtistLevelScreen';
import {connect} from 'react-redux';
import {getQuestion, getCurrentLevel, getLoading} from '../selectors'
import {goToNextScreen, loadQuestionsRequest} from '../AC'
import Preloader from './Preloader';

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

export default connect(state => ({
  question: getQuestion(state),
  levelNumber: getCurrentLevel(state),
  loading: getLoading(state)
}), {goToNextScreen, loadQuestionsRequest})(GameScreen);
