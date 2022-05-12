import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxStore from './store';
import App from './index';

let initialState = '';

if (window !== undefined && window.__INITIAL_STATE__) {
  initialState = window.__INITIAL_STATE__;
  Reflect.deleteProperty(window, '__INITIAL_STATE__');
}
const store = reduxStore(initialState);
hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById("root"));
