import * as types from './types';
import {get} from '../../utils/Networking';

export const fetchAllEpisode = (page = 1) => {
  return dispatch => {
    const url = '/episode';
    const params = {
      page: page,
    };
    dispatch({
      type: types.FETCH_ALL_EPISODE_LOADING,
      payload: true,
    });
    return get(url, params)
      .then(({data, status}) => {
        if (status !== 200) {
          throw data;
        }

        dispatch(
          {
            type: types.FETCH_ALL_EPISODE_SUCCESS,
            payload: data,
          },
          {
            type: types.FETCH_ALL_EPISODE_LOADING,
            payload: false,
          },
        );
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_ALL_EPISODE_FAIL,
          payload: error,
        });
      });
  };
};
