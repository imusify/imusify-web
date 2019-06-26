import * as types from '../types';

const actions = {
  [types.ALERT]: ({ commit }, opts) => {
    commit(types.ALERT, opts);
  },
};

const mutations = {
  [types.ALERT]: (state, value) => {
    state.isShown = value;
  },
};

const getters = {
  [types.ALERT]: state => state.alert,
};

const state = {
  isShown: false,
  alertType: '',
  message: '',
};

export default {
  state,
  getters,
  mutations,
  actions,
};
