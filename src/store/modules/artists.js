import artists from '../api/artists';
import * as types from '../types';

const actions = {
  [types.ARTIST_POST]: ({ commit }, opts) => artists.post(opts)
    .then((res) => {
      commit(types.ARTIST, res.data);
    }),

  [types.ARTIST_PUT]: ({ commit }, opts) => artists.put(opts)
    .then((res) => {
      commit(types.ARTIST, res.data);
    }),

  [types.ARTIST_DELETE]: ({ commit }, opts) => artists.delete(opts.id)
    .then((res) => {
      commit(types.ARTIST, res.data);
    }),

  [types.ARTIST_GET]: ({ commit }, id) => {
    // eslint-disable-next-line
    console.log('get track', id);
    commit(types.LOADING, true);

    artists.get(id)
      .then((res) => {
        commit(types.ARTIST, res.data);
        commit(types.LOADING, false);
      });
  },

  [types.ARTIST_LIST]: ({ commit }) => artists.getAll()
    .then((res) => {
      commit(types.ARTIST_LIST, res.data);
    }),
};

const mutations = {
  [types.ARTIST]: (state, data) => {
    state.artist = data;
  },

  [types.ARTIST_LIST]: (state, data) => {
    state.artists = data.artists;
  },
};

const getters = {
  [types.ARTIST]: state => state.artist,

  [types.ARTIST_LIST]: state => state.artists,
};

const state = {
  artist: null,
  artists: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
