import {all, put, take, call, takeLatest, select} from 'redux-saga/effects'
import {
  SET_LOADING,
  URL_QUESTION,
  START_GAME_URL,
  CHANGE_SCREEN,
  URL_WRITE_RESULT,
  RESET_STORE,
  LOAD_QUESTIONS_REQUEST,
  SUCCESS_URL,
  FAIL_URL,
  SAVE_TIME_REQUEST
} from '../constants'
import {loadQuestionsSuccess, loadQuestionsRequest, loadAllResults, saveTimeToStore} from "../AC/index"
import { push } from 'connected-react-router'

import {
  START_NEW_GAME_REQUEST, START_GAME_REQUEST, TO_NEXT_SCREEN_REQUEST, URL_STATISTIC,
  SET_END_GAME, LOAD_ALL_RESULTS_REQUEST
} from "../constants/index";

export function * loadQuestions() {
  try {
    //yield put({type: SET_LOADING});
    const response = yield call(fetch, URL_QUESTION);
    const questions = yield call([response, response.json]);
    yield put(loadQuestionsSuccess(questions))
  } catch (e) {
  }
}

export function * goToStartNewGame() {
  yield put({
    type: RESET_STORE
  });
  yield put(push(START_GAME_URL));
  yield put(loadQuestionsRequest())
}

export function * goToStartGame() {
  yield put(push(START_GAME_URL))
}

export function * loadResults() {
  yield put({type: SET_LOADING});
  const response = yield call(fetch, URL_STATISTIC);
  const statistic = yield call([response, response.json]);
  yield put(loadAllResults(statistic));
}

export function * sendResult(data) {
  const requestSettings = {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': `application/json`
    },
    method: `POST`
  };
  yield call(fetch, URL_WRITE_RESULT, requestSettings);
}

export function * goToSuccessScreen() {
  yield put({type: SET_LOADING});
  const {time, correctAnswers} = yield select();
  const data = {id: Date.now(), time, correctAnswers};
  yield sendResult(data);
  yield put(push(SUCCESS_URL + data.id));
}

export function * goToNextScreen({payload}) {
  yield put({
    type: CHANGE_SCREEN,
    payload
  });
  const store = yield select();
  const {lives, questions, currentLevel} = store;
  if (lives === 0) {
    yield put(push(FAIL_URL));
  }
  if (currentLevel === questions.length) {
    yield goToSuccessScreen()
  }
}
export function * goToNextTick() {
  const {time} = yield select();
  const nextTime = time - 1;
  yield put(saveTimeToStore(nextTime));
  if (nextTime <= 0) yield put(push(FAIL_URL))
}
export default function * rootSaga() {
  yield takeLatest(LOAD_QUESTIONS_REQUEST, loadQuestions);
  yield takeLatest(START_NEW_GAME_REQUEST, goToStartNewGame);
  yield takeLatest(START_GAME_REQUEST, goToStartGame);
  yield takeLatest(TO_NEXT_SCREEN_REQUEST, goToNextScreen);
  yield takeLatest(LOAD_ALL_RESULTS_REQUEST, loadResults);
  yield takeLatest(SAVE_TIME_REQUEST, goToNextTick)
}