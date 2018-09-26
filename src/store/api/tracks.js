import _ from 'lodash';
import { api, globalErrorHandler } from './create-api';
import mocks from './mocks/tracks';

let mockApi = {};

if (process.env.NODE_ENV === 'development') {
  mockApi = _.extend({}, mocks);
}

export default _.extend({
  post(opts) {
    return api.post('/tracks', opts)
      .catch(globalErrorHandler);
  },

  put(opts) {
    return api.put(`/tracks/${opts._id}`, opts)
      .catch(globalErrorHandler);
  },

  delete(id) {
    return api.delete(`/tracks/${id}`)
      .catch(globalErrorHandler);
  },

  get(id) {
    return api.get(`/tracks/${id}`)
      .catch(globalErrorHandler);
  },

  getAll() {
    return api.get('/tracks')
      .catch(globalErrorHandler);
  },
}, mockApi);
