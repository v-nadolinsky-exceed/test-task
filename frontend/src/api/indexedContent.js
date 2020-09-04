import axios from 'axios';

export default {
  find: (conditions) => {
    if (!conditions) throw new Error('URL is not provided');
    // if (!conditions.url) return axios.post('/indexed', { conditions });
    return axios.post('/indexed',  conditions );
  }
}