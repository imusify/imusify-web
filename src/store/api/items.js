import api from './create-api';

export default {
  post(opts) {
    return api.post('/items', opts);
  },

  put(opts) {
    return api.put(`/items/${opts._id}`, opts);
  },

  delete(id) {
    return api.delete(`/items/${id}`);
  },

  get(id) {
    return api.get(`/items/${id}`);
  },

  getAll() {
    return api.get('/items');
  },

  getAllByUser() {
    return api.get('/items/me');
  },
};
