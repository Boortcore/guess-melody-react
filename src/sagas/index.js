import { put, call, takeLatest, select } from 'redux-saga/effects'
import {
  SET_LOADING,
  START_GAME_URL,
  CHANGE_SCREEN,
  URL_QUESTION,
  URL_WRITE_RESULT,
  URL_STATISTIC,
  SUCCESS_URL,
  FAIL_URL,
  RESET_STORE,
  MAX_TIME,
  START_GAME_REQUEST,
  CHANGE_TIME_REQUEST,
  LOAD_QUESTIONS_REQUEST,
  START_NEW_GAME_REQUEST,
  TO_NEXT_SCREEN_REQUEST,
  LOAD_ALL_RESULTS_REQUEST
} from '../constants';

import { loadQuestionsSuccess, loadResultsSuccess, setTimeToStore } from "../AC/index"
import { push } from 'connected-react-router'
import { getStatistic } from "../utils/index"

export function* loadQuestionsSaga() {
  try {
    const response = yield call(fetch, URL_QUESTION);
    const questions = yield call([response, response.json]);
    yield put(loadQuestionsSuccess(questions))
  } catch (e) {
  }
}

export function* goToStartNewGameSaga() {
  yield put({
    type: RESET_STORE
  });
  yield put(push(START_GAME_URL));
}

export function* goToStartGameSaga() {
  yield put(push(START_GAME_URL))
}

export function* loadResultsSaga() {
  yield put({ type: SET_LOADING });
  const response = yield call(fetch, URL_STATISTIC);
  const statistic = yield call([response, response.json]);
  yield put(loadResultsSuccess(statistic));
}

export function* sendResultSaga(data) {
  const requestSettings = {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': `application/json`
    },
    method: `POST`
  };
  yield call(fetch, URL_WRITE_RESULT, requestSettings);
}

export function* goToSuccessScreenSaga() {
  yield put({ type: SET_LOADING });
  const { game: { time, correctAnswers } } = yield select();
  const data = { id: Date.now(), time: MAX_TIME - time, correctAnswers };
  yield sendResultSaga(data);
  yield put(push(SUCCESS_URL + data.id));
}

export function* goToNextScreenSaga({ payload }) {
  yield put({
    type: CHANGE_SCREEN,
    payload
  });
  const store = yield select();
  const { lives, questions, currentLevel } = store.game;
  if (lives === 0) {
    yield put(push(FAIL_URL));
  }
  if (currentLevel === questions.length) {
    yield goToSuccessScreenSaga()
  }
}

export function* setTimeToStoreSaga() {
  const { game } = yield select();
  const nextTime = game.time - 1;
  yield put(setTimeToStore(nextTime));
  if (nextTime <= 0) yield put(push(FAIL_URL))
}

export default function* rootSaga() {
  yield takeLatest(LOAD_QUESTIONS_REQUEST, loadQuestionsSaga);
  yield takeLatest(START_NEW_GAME_REQUEST, goToStartNewGameSaga);
  yield takeLatest(START_GAME_REQUEST, goToStartGameSaga);
  yield takeLatest(TO_NEXT_SCREEN_REQUEST, goToNextScreenSaga);
  yield takeLatest(LOAD_ALL_RESULTS_REQUEST, loadResultsSaga);
  yield takeLatest(CHANGE_TIME_REQUEST, setTimeToStoreSaga)
}