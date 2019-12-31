import {MAX_TIME, RADIUS} from "../constants/index"
const lengthRound = Math.round(2 * Math.PI * RADIUS);
const shadowRound = lengthRound / (MAX_TIME);

export function getQuestion(state) {
  return state.game.questions[state.game.currentLevel];
}

export function getResults(state) {
  return state.game.results;
}

export function getLoading(state) {
  return state.game.loading;
}

export function getAnswers(state) {
  return state.game.correctAnswers;
}

export function getCurrentLevel(state) {
  return state.game.currentLevel;
}

export function getTime(state) {
  return state.game.time;
}

export function getFormatTime(state) {
  const minutes = String(Math.floor(state.game.time / 60)).padStart(2, `0`);
  const seconds = String(Math.floor(state.game.time % 60)).padStart(2, `0`);
  return {minutes, seconds}
}

export function getTimerViewInfo({game: {time}}) {
  return {
    strokeDashoffset: shadowRound * (MAX_TIME - time),
    strokeDasharray: lengthRound
  };
}