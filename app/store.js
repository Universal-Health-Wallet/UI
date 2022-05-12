import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './createReducer';

const reduxStore = (initialState) => {
  const rootReducer = createReducer(initialState);
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};

export default reduxStore;
