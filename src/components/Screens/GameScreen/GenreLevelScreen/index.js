import {compose, withHandlers, withState} from 'recompose'
import GenreLevelScreen from './GenreLevelScreen'

export default compose(
  withState('choosedAnswers', 'onChangeAnswer', ({question: {answers}}) => {
    return answers.reduce((acc,answer, index) => {
        acc[`a-` + index] = {
          id: `a-` + index,
          genre: answer.genre,
          src: answer.src,
          checked: false
        };
        return acc
    }, {})
  }),
  withHandlers({
    onChooseAnswer: ({choosedAnswers, onChangeAnswer}) => ({target}) => {
      const {id} = target;
      const newState = {...choosedAnswers};
      const answer = newState[id];
      answer.checked = target.checked;
      onChangeAnswer(newState);
    },
    onClickAnswer: ({goToNextScreen, question: {genre}, choosedAnswers}) => (e) => {
      e.preventDefault();
      const answer = Object.values(choosedAnswers).every(answer => answer.genre !== genre && !answer.checked || answer.genre === genre && answer.checked);
      goToNextScreen(answer);
    }
  })
)(GenreLevelScreen)
