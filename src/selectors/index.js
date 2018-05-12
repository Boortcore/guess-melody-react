export function getQuestion(state) {
  return state.game.questions[state.game.currentLevel];
}