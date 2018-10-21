import WelcomeScreen from './WelcomeScreen'
import {compose} from 'recompose'
import {connect} from 'react-redux';
import {startGameRequest} from "../../../AC/index"

export default compose(
  connect(null, {startGameRequest})
)(WelcomeScreen)