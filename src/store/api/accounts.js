import api from './create-api';

export default {
  login(creds) {
    return api.post('/accounts/login', creds)
      .then((res) => {
        api.defaults.headers.Authorization = `JWT ${res.data.token}`;

        return res;
      });
  },
  register(creds) {
    return api.post('/accounts', creds);
  },
};
