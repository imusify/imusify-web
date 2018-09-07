import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import accounts from './modules/accounts';
import items from './modules/items';
import artists from './modules/artists';
import tracks from './modules/tracks';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isModalOpen: false,
  },
  mutations,
  modules: {
    accounts,
    artists,
    tracks,
    items,
  },
});

export default store;
