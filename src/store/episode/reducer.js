import * as types from './types';

export const EpisodeReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_ALL_EPISODE_SUCCESS:
      return {...state, fetchAllEpisode: action.payload};
    case types.FETCH_ALL_EPISODE_LOADING:
      return {...state, fetchAllEpisodeLoading: action.payload};
    case types.FETCH_ALL_EPISODE_FAIL:
      return {...state, fetchAllEpisodeFail: action.payload};
    default:
      return state;
  }
};
