import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import info from '../reducers';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import history from '../history';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers({
  info, router: routerReducer
}), applyMiddleware(sagaMiddleware, middleware, thunk ));

sagaMiddleware.run(rootSaga);
window.store = store;

export default store;