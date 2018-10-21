import Timer from './Timer'
import {compose} from 'recompose'
import {connect} from 'react-redux';
import {changeTimeRequest} from "../../AC/index"
import {getTime} from "../../selectors/index"

export default compose(
  connect(state => ({
    time: getTime(state)
  }), {changeTimeRequest})
)(Timer)