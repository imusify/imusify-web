import accounts from '../api/accounts';
import * as types from '../types';

const actions = {
  [types.ACCOUNTS_SIGNUP]: ({ commit }, opts) => accounts.signup(opts)
    .then((res) => {
      commit(types.ACCOUNTS_USER, res.data);
      commit(types.ACCOUNTS_LOGIN_STATUS, 'Ok');
      // commit(types.ACCOUNTS_TOKEN, res.data);
    }),

  [types.ACCOUNTS_USER]: ({ commit }, creds) => accounts.login(creds)
    .then((res) => {
      commit(types.ACCOUNTS_USER, res.data.user);
      commit(types.ACCOUNTS_LOGIN_STATUS, 'You are now logged in!');
      commit(types.ACCOUNTS_TOKEN, res.data.token);
    }),

  [types.ACCOUNTS_USER_UPDATE]: ({ commit }, user) => accounts.patch(user)
    .then((res) => {
      commit(types.ACCOUNTS_USER, res.data);
      commit(types.ACCOUNTS_LOGIN_STATUS, 'You have updated your profile!');
    }),

  [types.ACCOUNTS_LOGOUT]: ({ commit }) => {
    commit(types.ACCOUNTS_USER, null);
    commit(types.ACCOUNTS_TOKEN, null);
    commit(types.ACCOUNTS_LOGIN_STATUS, 'You are now logged out.');

    return Promise.resolve();
  },

  [types.ACCOUNTS_USER_ACTIVATE]: ({ commit }, code) => accounts.activate(code)
    .then((res) => {
      commit(types.ACCOUNTS_LOGIN_STATUS, 'Account activation successful!');
      commit(types.ACCOUNTS_TOKEN, res.data.token);
    })
    .catch((err) => {
      commit(types.ACCOUNTS_LOGIN_STATUS, err.response.data.error);
    }),
};

const mutations = {
  [types.ACCOUNTS_USER]: (state, user) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }

    state.user = user;
  },

  [types.ACCOUNTS_USER_CREDENTIALS]: (state, credentials) => {
    state.credentials = credentials;
  },

  [types.ACCOUNTS_LOGIN_STATUS]: (state, message) => {
    state.status = message;
  },

  [types.ACCOUNTS_TOKEN]: (state, token) => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }

    state.token = token;
  },
};

const getters = {
  [types.ACCOUNTS_USER_CREDENTIALS]: state => state.credentials,

  [types.ACCOUNTS_USER]: state => state.user,

  [types.ACCOUNTS_LOGIN_STATUS]: state => state.status,

  [types.ACCOUNTS_TOKEN]: state => state.token,
};

const state = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  status: null,
  token: localStorage.getItem('token') || null,
  credentials: {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
