import { api, globalErrorHandler } from './create-api';

export default {
  login(creds) {
    return api.post('/auth-token/', creds)
      .then((res) => {
        api.defaults.headers.Authorization = `JWT ${res.data.token}`;

        return res;
      })
      .catch(globalErrorHandler);
  },
  signup(creds) {
    return api.post('/users/', creds)
      .catch(globalErrorHandler);
  },
  activate(code) {
    return api.post(`/users/activate/${code}`)
      .catch(globalErrorHandler);
  },
  patch(user) {
    return api.patch(`/users/${user.id}`, user)
      .catch(globalErrorHandler);
  },
};
