import SuccessScreen from './SuccessScreen'
import {connect} from 'react-redux'
import {compose, withHandlers, lifecycle} from 'recompose'
import {startGameRequest, loadAllResultsRequest} from '../../../AC/index'
import {getAnswers, getLoading, getResults} from "../../../selectors/index"


export default compose(
  connect(state => ({
    correctAnswers: getAnswers(state),
    loading: getLoading(state),
    results: getResults(state)
  }), {startGameRequest, loadAllResultsRequest}),
  lifecycle({
    componentDidMount() {
      this.props.loadAllResultsRequest()
    }
  }),
  withHandlers({
    onClick: ({startGameRequest}) => () => {
      startGameRequest()
    }
  })
)(SuccessScreen);