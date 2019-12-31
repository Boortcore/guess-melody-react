import GameScreen from './GameScreen'
import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose'
import {getQuestion, getCurrentLevel, getLoading} from '../../../selectors/index'
import {goToNextScreen, loadQuestionsRequest} from '../../../AC/index'

export default compose(
  connect(state => ({
    question: getQuestion(state),
    levelNumber: getCurrentLevel(state),
    loading: getLoading(state)
  }), {goToNextScreen, loadQuestionsRequest}),
  lifecycle({
    componentDidMount() {
      this.props.loadQuestionsRequest();
    }
  })
)(GameScreen)