import * as types from '../types';

const actions = {};

const mutations = {
  [types.LOADING]: (state, data) => {
    state.loading = data;
  },
};

const getters = {
  [types.LOADING]: state => state.loading,
};

const state = {
  loading: false,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
