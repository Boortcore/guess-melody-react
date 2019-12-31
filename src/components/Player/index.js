import Player from './Player'
import {compose, withHandlers, withStateHandlers} from 'recompose'

export default compose(
  withStateHandlers(
    () => ({
      paused: false
    }),
    {
      setPlayerState: ({paused}) => () => ({
        paused: !paused
      })
    }
  ),
  withHandlers(() => {
      let _ref = null;
      return {
        registerPlayerNode: () => node => {
          _ref = node;
        },
        onClick: ({setPlayerState}) => (e) => {
          e.preventDefault();
          const {paused} = _ref;
          setPlayerState();
          if (paused) {
            _ref.play();
          } else {
            _ref.pause();
          }
        }
      }
    },
)
)(Player)