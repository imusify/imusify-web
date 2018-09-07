import _ from 'lodash';
import api from './create-api';
import mocks from './mocks/tracks';

let mockApi = {};

if (process.env.NODE_ENV === 'development') {
  mockApi = _.extend({}, mocks);
}

export default _.extend({
  post(opts) {
    return api.post('/tracks', opts);
  },

  put(opts) {
    return api.put(`/tracks/${opts._id}`, opts);
  },

  delete(id) {
    return api.delete(`/tracks/${id}`);
  },

  get(id) {
    return api.get(`/tracks/${id}`);
  },

  getAll() {
    return api.get('/tracks');
  },
}, mockApi);
