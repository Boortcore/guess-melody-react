import { createStore, applyMiddleware, combineReducers } from 'redux';
import game from '../reducers';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import history from '../history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const routerReduxMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    game,
    router: routerReducer,
  }),
  applyMiddleware(sagaMiddleware, routerReduxMiddleware),
);

sagaMiddleware.run(rootSaga);
window.store = store;

export default store;
