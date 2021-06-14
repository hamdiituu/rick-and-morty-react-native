import * as types from './types';
import {get} from '../../utils/Networking';

export const fetchMainCharacters = () => {
  return dispatch => {
    const url = 'character';
    const params = {
      page: 1,
    };

    return get(url, params)
      .then(({data, status}) => {
        if (status !== 200) {
          throw data;
        }

        dispatch({
          type: types.FETCH_MAIN_CHARACTER_SUCCESS,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_MAIN_CHARACTER_FAIL,
          payload: error,
        });
      });
  };
};

export const fetchDetailCharacter = id => {
  return dispatch => {
    const url = `character/${id}`;

    dispatch({
      type: types.FETCH_DETAIL_CHARACTER_LOADING,
      payload: true,
    });

    return get(url)
      .then(({data, status}) => {
        if (status !== 200) {
          throw data;
        }

        dispatch({
          type: types.FETCH_DETAIL_CHARACTER_SUCCESS,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_DETAIL_CHARACTER_FAIL,
          payload: error,
        });
      })
      .finally(() =>
        dispatch({
          type: types.FETCH_DETAIL_CHARACTER_LOADING,
          payload: false,
        }),
      );
  };
};
