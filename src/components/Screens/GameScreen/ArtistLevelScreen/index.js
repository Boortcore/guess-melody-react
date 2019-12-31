import ArtistLevelScreen from './ArtistLevelScreen'
import {compose, withHandlers} from 'recompose'

export default compose(
  withHandlers({
    onClickAnswer: ({goToNextScreen}) => e => {
      e.preventDefault();
      const answer = e.target.value === 'true';
      goToNextScreen(answer);
    }
  })
)(ArtistLevelScreen)