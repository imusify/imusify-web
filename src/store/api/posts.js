import { api, globalErrorHandler, progressUpload } from './create-api';

export default {
  post(opts) {
    return api.post(`/channels/${opts.channel}/posts/new`, opts).catch(globalErrorHandler);
  },

  saveTrack(opts) {
    return api.post(`/channels/${opts.channel}/posts/new`, opts).catch(globalErrorHandler);
  },

  put(opts) {
    return api.put(`/posts/${opts._id}`, opts).catch(globalErrorHandler);
  },

  delete(id) {
    return api.delete(`/posts/${id}`).catch(globalErrorHandler);
  },

  get(id) {
    return api.get(`/posts/${id}/`).catch(globalErrorHandler);
  },

  getCategories() {
    return api.get('/posts/categories/').catch(globalErrorHandler);
  },

  getAll() {
    return api.get('/posts/').catch(globalErrorHandler);
  },

  upvote(id) {
    return api.post(`/posts/${id}/vote/up/`).catch(globalErrorHandler);
  },

  downvote(id) {
    return api.post(`/posts/${id}/vote/down/`).catch(globalErrorHandler);
  },

  getUploadURL(file) {
    const data = {
      filename: file.name,
      content_type: file.type,
    };
    return api.post('storage/s3-upload-url', data);
  },

  upload(data, cb) {
    progressUpload(data.url, data.file, result => cb(result));
  },
};
