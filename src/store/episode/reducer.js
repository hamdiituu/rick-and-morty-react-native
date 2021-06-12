import * as types from './types';

export const EpisodeReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_ALL_EPISODE_SUCCESS:
      return {...state, fetchAllCharacter: action.payload};
    case types.FETCH_ALL_EPISODE_LOADING:
      return {...state, fetchAllCharacterLoading: action.payload};
    case types.FETCH_ALL_EPISODE_FAIL:
      return {...state, fetchAllCharacterFail: action.payload};
    default:
      return state;
  }
};
