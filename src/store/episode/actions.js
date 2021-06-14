import * as types from './types';
import {get} from '../../utils/Networking';

export const fetchMainEpisodes = (page = 1) => {
  return dispatch => {
    const url = '/episode';
    const params = {
      page: page,
    };

    return get(url, params)
      .then(({data, status}) => {
        if (status !== 200) {
          throw data;
        }
        dispatch({
          type: types.FETCH_MAIN_EPISODE_SUCCESS,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_MAIN_EPISODE_FAIL,
          payload: error,
        });
      });
  };
};

export const fetchDetailEpisode = id => {
  return dispatch => {
    const url = `/episode/${id}`;

    dispatch({
      type: types.FETCH_DETAIL_EPISODE_LOADING,
      payload: true,
    });

    return get(url)
      .then(({data, status}) => {
        if (status !== 200) {
          throw data;
        }
        dispatch({
          type: types.FETCH_DETAIL_EPISODE_SUCCESS,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_DETAIL_EPISODE_FAIL,
          payload: error,
        });
      })
      .finally(() =>
        dispatch({
          type: types.FETCH_DETAIL_EPISODE_LOADING,
          payload: false,
        }),
      );
  };
};
