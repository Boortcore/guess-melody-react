import Timer from './Timer'
import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose'
import {changeTimeRequest} from '../../AC/index'
import {getTime, getTimerViewInfo, getFormatTime} from '../../selectors/index'

export default compose(
  connect(
    state => ({
      time: getTime(state),
      timerView: getTimerViewInfo(state),
      formatTime: getFormatTime(state)
    }),
    {changeTimeRequest}
  ),
  lifecycle({
    componentDidMount() {
      this._interval = setInterval(() => {
        this.props.changeTimeRequest();
      }, 1000)
    },
    componentWillUnmount() {
      clearInterval(this._interval);
    }
  })
)(Timer)