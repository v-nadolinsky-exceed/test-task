import axios from 'axios';

export default {
  post: (url) => {
    if (!url) throw new Error('URL is not provided');
    return axios.post('/indexed', { url });
  }
}