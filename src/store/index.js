import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';

const store = createStore(
  combineReducers({}),
  applyMiddleware(thunkMiddleware),
);

export default store;
