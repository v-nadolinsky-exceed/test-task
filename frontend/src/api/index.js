import axios from 'axios';
import indexedRequest from './indexedContent';

import { BASE_URL } from '../constants';

axios.interceptors.request.use((config) => {
  return {
    ...config,
    baseURL: BASE_URL
  };
}, (error) => {
  return Promise.reject(error);
});

export const indexed = {
  find: indexedRequest.find
}