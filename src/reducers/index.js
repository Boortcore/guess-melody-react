import {
  CHANGE_SCREEN,
  SET_LOADING,
  LOAD_QUESTIONS_SUCCESS,
  RESET_STORE,
  LOAD_ALL_RESULTS,
  SET_TIME,
  MAX_TIME
} from "../constants/index"

const initialState = {
  questions: [],
  lives: 3,
  time: MAX_TIME,
  currentLevel: 0,
  correctAnswers: 0,
  loading: true,
  results: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_LOADING:
      return Object.assign({}, state, {loading: true});
    case SET_TIME:
      return Object.assign({}, state, {time: payload});
    case LOAD_QUESTIONS_SUCCESS:
      return Object.assign({}, state, {questions: payload, loading:false});
    case LOAD_ALL_RESULTS:
      return Object.assign({}, state, {results: payload,  loading: false});
    case CHANGE_SCREEN:
      const lives = payload ? state.lives : state.lives - 1;
      const currentLevel = state.currentLevel + 1;
      const correctAnswers = payload ? state.correctAnswers + 1 : state.correctAnswers;
      return Object.assign({}, state, {currentLevel, lives, correctAnswers});
    case RESET_STORE:
      return initialState;
    default:
      return state;
  }
}