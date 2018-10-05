import * as types from '../types';

const actions = {};

const mutations = {
  [types.TOGGLER_SIGNUP]: (state, isOpen) => {
    state.isSignupOpen = isOpen;
  },

  [types.TOGGLER_LOGIN]: (state, isOpen) => {
    state.isLoginOpen = isOpen;
  },
};

const getters = {
  [types.TOGGLER_SIGNUP]: state => state.isSignupOpen,
  [types.TOGGLER_LOGIN]: state => state.isLoginOpen,
};

const state = {
  isSignupOpen: false,
  isLoginOpen: false,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
