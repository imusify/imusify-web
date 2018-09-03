import artists from '../api/artists';
import * as types from '../types';

const actions = {
  [types.ARTISTS_TRACK_POST]: ({ commit }, opts) => artists.post(opts)
    .then((res) => {
      commit(types.ARTIST_TRACK, res.data);
    }),

  [types.ARTISTS_TRACK_PUT]: ({ commit }, opts) => artists.put(opts)
    .then((res) => {
      commit(types.ARTIST_TRACK, res.data);
    }),

  [types.ARTISTS_TRACK_DELETE]: ({ commit }, opts) => artists.delete(opts.id)
    .then((res) => {
      commit(types.ARTIST_TRACK, res.data);
    }),

  [types.ARTIST_TRACK_GET]: ({ commit }, id) => {
    console.log('get track', id);

    artists.get(id)
      .then((res) => {
        commit(types.ARTIST_TRACK, res.data);
      });
  },

  [types.ARTISTS_TRACK_LIST]: ({ commit }) => artists.getAll()
    .then((res) => {
      commit(types.ARTISTS_TRACK_LIST, res.data);
    }),
};

const mutations = {
  [types.ARTIST_TRACK]: (state, data) => {
    state.track = data;
  },

  [types.ARTISTS_TRACK_LIST]: (state, data) => {
    state.tracks = data.tracks;
  },
};

const getters = {
  [types.ARTIST_TRACK]: state => state.track,

  [types.ARTISTS_TRACK_LIST]: state => state.tracks,
};

const state = {
  track: null,
  tracks: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
