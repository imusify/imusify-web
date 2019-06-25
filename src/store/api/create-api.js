import Axios from 'axios';

// todo change dev url
const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://imusify-prod.herokuapp.com/v1'
    : 'https://imusify-dev.herokuapp.com/v1';
const headers = {};
const token = localStorage.getItem('token');

if (token) {
  headers.Authorization = `JWT ${token}`;
}

const api = Axios.create({
  baseURL,
  headers,
});

function globalErrorHandler(err) {
  if (err.code === 401) {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
  console.error(err);
  return Promise.reject(err);
}

function progressUpload(path, file, cb) {
  let progressData;
  Axios.put(path, file, {
    headers: {
      'Content-Type': file.type,
    },
    onUploadProgress: (progressEvent) => {
      const totalLength = progressEvent.lengthComputable
        ? progressEvent.total
        : progressEvent.target.getResponseHeader('content-length') ||
          progressEvent.target.getResponseHeader('x-decompressed-content-length',);
      if (totalLength !== null) {
        progressData = Math.round((progressEvent.loaded * 100) / totalLength);
      }
      cb(progressData);
      return progressData;
    },
  }).catch(error => globalErrorHandler(error));
}

export { api, globalErrorHandler, progressUpload, Axios };
