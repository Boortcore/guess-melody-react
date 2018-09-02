import {compose, withHandlers} from 'recompose'
import GenreLevelScreen from './GenreLevelScreen'

export default compose(
  withHandlers({
    onClickAnswer: ({goToNextScreen}) => (e) => {
      e.preventDefault();
      const answer = e.target.value === 'true';
      goToNextScreen(answer);
    }
  })
)(GenreLevelScreen)