import ReactDOM from 'react-dom';
import App from './App';
import reducers from './reducers'

import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducers, compose(applyMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);