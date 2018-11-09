import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import accounts from './modules/accounts';
import items from './modules/items';
import artists from './modules/artists';
import tracks from './modules/tracks';
import loading from './modules/loading';
import togglers from './modules/togglers';
import posts from './modules/posts';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isModalOpen: false,
    isTrackPlaying: false,
  },
  mutations,
  modules: {
    accounts,
    artists,
    tracks,
    items,
    loading,
    togglers,
    posts,
  },
});

export default store;
