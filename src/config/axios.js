import axios from 'axios';
import { getToken, removeToken } from '../utilities/localStorage';

axios.defaults.baseURL = 'http://localhost:2525';

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      removeToken();
      window.location.replace('/');
    }
    return Promise.reject(err);
  }
);

export default axios;
