import {
  LOAD_QUESTIONS_REQUEST,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_ALL_RESULTS_REQUEST,
  START_GAME_REQUEST,
  START_NEW_GAME_REQUEST,
  TO_NEXT_SCREEN_REQUEST,
  LOAD_ALL_RESULTS
} from '../constants'

export function loadQuestionsSuccess(data) {
  return {
    type: LOAD_QUESTIONS_SUCCESS,
    payload: data
  }
}

export function loadQuestionsRequest() {
  return {
    type: LOAD_QUESTIONS_REQUEST,
  }
}

export function startGameRequest() {
  return {
    type: START_GAME_REQUEST
  }
}

export function startNewGameRequest() {
  return {
    type: START_NEW_GAME_REQUEST
  }
}

export function goToNextScreen(answer) {
  return {
    type: TO_NEXT_SCREEN_REQUEST,
    payload: answer
  }
}
export function loadAllResultsRequest() {
  return {
    type: LOAD_ALL_RESULTS_REQUEST,
  }
}
export function loadAllResults(data) {
  return {
    type: LOAD_ALL_RESULTS,
    payload: data
  }
}