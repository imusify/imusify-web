import posts from '../api/posts';
import * as types from '../types';

const actions = {
  [types.POST_UPVOTE]: ({ commit }, opts) => {
    commit(types.LOADING, true);
    posts.upvote(opts.id)
      .then(() => {
        commit(types.LOADING, false);
      });
  },
  [types.POST_DOWNVOTE]: ({ commit }, opts) => {
    commit(types.LOADING, true);
    posts.downvote(opts.id)
      .then(() => {
        commit(types.LOADING, false);
      });
  },
  [types.POST_CREATE]: ({ commit }, opts) => posts.post(opts)
    .then((res) => {
      commit(types.POST, res.data);
    }),
  [types.POST_LIST]: ({ commit }) => {
    commit(types.LOADING, true);

    posts.getAll()
      .then((res) => {
        commit(types.POST_LIST, res.data.results);
        commit(types.LOADING, false);
      });
  },
  [types.POST_DELETE]: ({ commit }, opts) => posts.delete(opts.id)
    .then((res) => {
      commit(types.POST_DELETE, res.data);
    }),
  [types.POST_GET]: ({ commit }, id) => {
    commit(types.LOADING, true);

    posts.get(id)
      .then((res) => {
        commit(types.POST, res.data);
      });
  },
  [types.POST_PUT]: ({ commit }, opts) => posts.put(opts)
    .then((res) => {
      commit(types.POST_PUT, res.data);
    }),
  [types.POSTS_CATEGORIES]: ({ commit }) => posts.getCategories()
    .then((res) => {
      commit(types.POSTS_CATEGORIES, res.data);
      commit(types.POSTS_CATEGORIES_CATEGORY, res.data.results[0] ? res.data.results[0] : null);
      commit(types.POSTS_CATEGORIES_SUBCATEGORIES, res.data.results[0].children.length ?
        res.data.results[0].children : []);
      commit(types.POSTS_CATEGORIES_SUBCATEGORIES_SUBCATEGORY, res.data.results.length &&
        res.data.results[0].children.length ?
        res.data.results[0].children[0] : null);
    }),
};

const mutations = {
  [types.POST]: (state, data) => {
    state.post = data;
  },

  [types.POST_LIST]: (state, data) => {
    state.posts = data;
  },
  [types.POSTS_CATEGORIES]: (state, data) => {
    state.categories = data.results;
  },
  [types.POSTS_CATEGORIES_SUBCATEGORIES]: (state, data) => {
    state.subCategories = data;
  },
  [types.POSTS_CATEGORIES_CATEGORY]: (state, data) => {
    state.category = data;
    state.subCategory = data.children.length ? data.children[0] : null;
  },
  [types.POSTS_CATEGORIES_SUBCATEGORIES_SUBCATEGORY]: (state, data) => {
    state.subCategory = data;
  },
};

const getters = {
  [types.POST]: state => state.post,

  [types.POST_LIST]: state => state.posts,

  [types.POSTS_CATEGORIES]: state => state.categories,

  [types.POSTS_CATEGORIES_SUBCATEGORIES]: state => state.subCategories,

  [types.POSTS_CATEGORIES_CATEGORY]: state => state.category,

  [types.POSTS_CATEGORIES_SUBCATEGORIES_SUBCATEGORY]: state => state.subCategory,
};

const state = {
  category: null,
  categories: [],
  subCategory: null,
  subCategories: [],
  post: null,
  posts: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
