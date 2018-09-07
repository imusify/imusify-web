import artists from '../api/artists';
import * as types from '../types';

const actions = {
  [types.ARTIST_TRACK_POST]: ({ commit }, opts) => artists.post(opts)
    .then((res) => {
      commit(types.ARTIST_TRACK, res.data);
    }),

  [types.ARTIST_TRACK_PUT]: ({ commit }, opts) => artists.put(opts)
    .then((res) => {
      commit(types.ARTIST_TRACK, res.data);
    }),

  [types.ARTIST_TRACK_DELETE]: ({ commit }, opts) => artists.delete(opts.id)
    .then((res) => {
      commit(types.ARTIST_TRACK, res.data);
    }),

  [types.ARTIST_TRACK_GET]: ({ commit }, id) => {
    // eslint-disable-next-line
    console.log('get track', id);

    artists.get(id)
      .then((res) => {
        commit(types.ARTIST_TRACK, res.data);
      });
  },

  [types.ARTIST_TRACK_LIST]: ({ commit }) => artists.getAll()
    .then((res) => {
      commit(types.ARTIST_TRACK_LIST, res.data);
    }),
};

const mutations = {
  [types.ARTIST_TRACK]: (state, data) => {
    state.artist = data;
  },

  [types.ARTIST_TRACK_LIST]: (state, data) => {
    state.artists = data.artists;
  },
};

const getters = {
  [types.ARTIST_TRACK]: state => state.artist,

  [types.ARTIST_TRACK_LIST]: state => state.artists,
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
