import posts from '../api/posts';
import * as types from '../types';

const actions = {
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
