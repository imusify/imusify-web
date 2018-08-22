import Axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? '/api/1' : 'http://localhost:3000/api/1';
const api = Axios.create({
  baseURL,
  headers: {
    Authorization: `JWT ${localStorage.getItem('token')}`,
  },
});

export default api;
