import GameScreen from './GameScreen'
import {compose} from 'recompose'
import {connect} from 'react-redux';
import {getQuestion, getCurrentLevel, getLoading} from '../../../selectors/index'
import {goToNextScreen, loadQuestionsRequest} from '../../../AC/index'

export default compose(
  connect(state => ({
    question: getQuestion(state),
    levelNumber: getCurrentLevel(state),
    loading: getLoading(state)
  }), {goToNextScreen, loadQuestionsRequest})
)(GameScreen)