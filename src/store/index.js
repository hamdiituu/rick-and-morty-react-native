import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {EpisodeReducer} from './episode/reducer';

const store = createStore(
  combineReducers({
    EpisodeReducer,
  }),
  applyMiddleware(thunkMiddleware),
);

export default store;
