import WelcomeScreen from './WelcomeScreen'
import {connect} from 'react-redux';
import {compose, withHandlers} from 'recompose'
import {startGameRequest} from "../../../AC/index"

export default compose(
  connect(null, {startGameRequest}),
  withHandlers({
    onClick: ({startGameRequest}) => () => {
      startGameRequest()
    }
  })
)(WelcomeScreen)