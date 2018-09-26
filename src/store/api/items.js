import { api, globalErrorHandler } from './create-api';

export default {
  post(opts) {
    return api.post('/items', opts)
      .catch(globalErrorHandler);
  },

  put(opts) {
    return api.put(`/items/${opts._id}`, opts)
      .catch(globalErrorHandler);
  },

  delete(id) {
    return api.delete(`/items/${id}`)
      .catch(globalErrorHandler);
  },

  get(id) {
    return api.get(`/items/${id}`)
      .catch(globalErrorHandler);
  },

  getAll() {
    return api.get('/items')
      .catch(globalErrorHandler);
  },

  getAllByUser() {
    return api.get('/items/me')
      .catch(globalErrorHandler);
  },
};
