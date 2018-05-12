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