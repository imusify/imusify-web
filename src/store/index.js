import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import accounts from './modules/accounts';
import items from './modules/items';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isModalOpen: false,
  },
  mutations,
  modules: {
    accounts,
    items,
  },
});

export default store;
