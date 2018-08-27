import api from './create-api';

export default {
  login(creds) {
    return api.post('/users/login', creds)
      .then((res) => {
        api.defaults.headers.Authorization = `JWT ${res.data.token}`;

        return res;
      });
  },
  signup(creds) {
    return api.post('/users/', creds);
  },
};
