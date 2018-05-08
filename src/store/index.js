import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import history from '../history';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(connectRouter(history)(reducer), applyMiddleware(sagaMiddleware, middleware, thunk ));

sagaMiddleware.run(rootSaga);
window.store = store;

export default store;