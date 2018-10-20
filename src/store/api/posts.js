import _ from 'lodash';
import { api, globalErrorHandler } from './create-api';
import mocks from './mocks/posts';

let mockApi = {};

if (process.env.NODE_ENV === 'development') {
  mockApi = _.extend({}, mocks);
}

export default _.extend({
  post(opts) {
    return api.post('/posts', opts)
      .catch(globalErrorHandler);
  },

  put(opts) {
    return api.put(`/posts/${opts._id}`, opts)
      .catch(globalErrorHandler);
  },

  delete(id) {
    return api.delete(`/posts/${id}`)
      .catch(globalErrorHandler);
  },

  get(id) {
    return api.get(`/posts/${id}`)
      .catch(globalErrorHandler);
  },

  getCategories() {
    return api.get('/posts/categories/')
      .catch(globalErrorHandler);
  },

  getAll() {
    return api.get('/posts')
      .catch(globalErrorHandler);
  },
}, mockApi);
