import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {EpisodeReducer} from './episode/reducer';
import {CharacterReducer} from './character/reducer';

const store = createStore(
  combineReducers({
    EpisodeReducer,
    CharacterReducer,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
