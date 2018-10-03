import * as types from '../types';

const actions = {};

const mutations = {
  [types.TOGGLER_SIGNUP]: (state, isOpen) => {
    state.isSignupOpen = isOpen;
  },
};

const getters = {
  [types.TOGGLER_SIGNUP]: state => state.isSignupOpen,
};

const state = {
  isSignupOpen: false,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
