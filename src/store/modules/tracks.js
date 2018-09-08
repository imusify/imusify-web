import tracks from '../api/tracks';
import * as types from '../types';

const actions = {
  [types.TRACK_POST]: ({ commit }, opts) => tracks.post(opts)
    .then((res) => {
      commit(types.TRACK, res.data);
    }),

  [types.TRACK_PUT]: ({ commit }, opts) => tracks.put(opts)
    .then((res) => {
      commit(types.TRACK, res.data);
    }),

  [types.TRACK_DELETE]: ({ commit }, opts) => tracks.delete(opts.id)
    .then((res) => {
      commit(types.TRACK, res.data);
    }),

  [types.TRACK_GET]: ({ commit }, id) => {
    // eslint-disable-next-line
    console.log('get track', id);
    commit(types.LOADING, true);

    tracks.get(id)
      .then((res) => {
        commit(types.TRACK, res.data);
        commit(types.LOADING, false);
      });
  },

  [types.TRACK_LIST]: ({ commit }) => tracks.getAll()
    .then((res) => {
      commit(types.TRACK_LIST, res.data);
    }),
};

const mutations = {
  [types.TRACK]: (state, data) => {
    state.track = data;
  },

  [types.TRACK_LIST]: (state, data) => {
    state.tracks = data.tracks;
  },
};

const getters = {
  [types.TRACK]: state => state.track,

  [types.TRACK_LIST]: state => state.tracks,
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
