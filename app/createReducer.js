import { combineReducers } from 'redux';

const createReducer = (initialState) => {
  const initialReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_PLATFORM': {
        const db = Object.assign({}, state);
        db.platform = action.platform;
        return db;
      }
      default: {
        return state;
      }
    }
  };
  return combineReducers({
    app: initialReducer,
  });
};
export default createReducer;
