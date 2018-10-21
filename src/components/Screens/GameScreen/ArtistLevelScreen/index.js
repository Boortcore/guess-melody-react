import {compose, withHandlers} from 'recompose'
import ArtistLevelScreen from './ArtistLevelScreen'

export default compose(
  withHandlers({
    onClickAnswer: ({goToNextScreen}) => (e) => {
      e.preventDefault();
      const answer = e.target.value === 'true';
      goToNextScreen(answer);
    }
  })
)(ArtistLevelScreen)