import _ from 'lodash';
import { api, globalErrorHandler } from './create-api';
import mocks from './mocks/artists';

let mockApi = {};

if (process.env.NODE_ENV === 'development') {
  mockApi = _.extend({}, mocks);
}

export default _.extend({
  post(opts) {
    return api.post('/artists', opts)
      .catch(globalErrorHandler);
  },

  put(opts) {
    return api.put(`/artists/${opts._id}`, opts)
      .catch(globalErrorHandler);
  },

  delete(id) {
    return api.delete(`/artists/${id}`)
      .catch(globalErrorHandler);
  },

  get(id) {
    return api.get(`/artists/${id}`)
      .catch(globalErrorHandler);
  },

  getAll() {
    return api.get('/artists')
      .catch(globalErrorHandler);
  },
}, mockApi);
