import { api, globalErrorHandler } from './create-api';

export default {
  post(opts) {
    return api.post('/artist', opts)
      .catch(globalErrorHandler);
  },

  put(opts) {
    return api.put(`/artist/${opts._id}`, opts)
      .catch(globalErrorHandler);
  },

  delete(id) {
    return api.delete(`/artist/${id}`)
      .catch(globalErrorHandler);
  },

  get(id) {
    return api.get(`/artist/${id}`)
      .catch(globalErrorHandler);
  },

  getAll() {
    return api.get('/artist/')
      .catch(globalErrorHandler);
  },
};
