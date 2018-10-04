import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import accounts from './modules/accounts';
import items from './modules/items';
import artists from './modules/artists';
import tracks from './modules/tracks';
import loading from './modules/loading';
import togglers from './modules/togglers';

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
    loading,
    togglers,
  },
});

export default store;
