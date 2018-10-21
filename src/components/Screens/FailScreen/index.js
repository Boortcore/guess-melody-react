import {compose} from 'recompose'
import FailScreen from './FailScreen'
import {startGameRequest} from '../../../AC/index'
import {connect} from 'react-redux'

export default compose(
  connect(null, {startGameRequest})
)(FailScreen)