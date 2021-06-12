import axios from 'axios';
import * as Constants from './Constants';

const axiosBase = axios.create({
  baseURL: Constants.API_BASE_URI,
  timeout: 1000,
});

export const get = (url, params = null) => {
  return axiosBase.get(url, {
    params: params,
  });
};
