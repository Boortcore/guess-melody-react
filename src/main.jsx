import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import { Provider } from 'react-redux';
// import {} from 'react-router'
import store from './store';
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root'),
);
