import * as types from './types';

export const EpisodeReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_MAIN_EPISODE_SUCCESS:
      return {...state, mainEpisode: action.payload};
    case types.FETCH_MAIN_EPISODE_LOADING:
      return {...state, mainEpisodeLoading: action.payload};
    case types.FETCH_MAIN_EPISODE_FAIL:
      return {...state, mainEpisodeFail: action.payload};
    case types.FETCH_DETAIL_EPISODE_SUCCESS:
      return {...state, detailEpisode: action.payload};
    case types.FETCH_DETAIL_EPISODE_LOADING:
      return {...state, detailEpisodeLoading: action.payload};
    case types.FETCH_DETAIL_EPISODE_FAIL:
      return {...state, detailEpisodeFail: action.payload};
    default:
      return state;
  }
};
