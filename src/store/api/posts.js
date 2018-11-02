import { api, globalErrorHandler } from './create-api';

export default {
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
    return api.get(`/posts/${id}/`)
      .catch(globalErrorHandler);
  },

  getCategories() {
    return api.get('/posts/categories/')
      .catch(globalErrorHandler);
  },

  getAll() {
    return api.get('/posts/')
      .catch(globalErrorHandler);
  },

  upvote(id) {
    return api.post(`/posts/${id}/action/up/`)
      .catch(globalErrorHandler);
  },

  downvote(id) {
    return api.post(`/posts/${id}/action/down/`)
      .catch(globalErrorHandler);
  },
};
