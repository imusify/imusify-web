<template>
  <nav class="topnav">
    <section class="categories" v-if="categories">
      <a href="#"
         class="prev"
         @click.prevent="prev('categories')">
        <icon name="prev" />
      </a>
      <ul id="categories">
        <li v-for="(cat, index) in categories"
            :key="index"
            :class="{ active: cat.name == category && category.name }">
          <a href="#"
             @click.prevent="setActiveCategory(cat)">{{cat.name}}</a>
        </li>
      </ul>
      <a href="#"
         class="next"
         @click.prevent="next('categories')">
        <icon name="next" />
      </a>
    </section>
    <section class="sub-categories" v-if="subCategories">
      <a href="#"
         class="prev"
         @click.prevent="prev('sub-categories')">
        <icon name="prev" />
      </a>
      <ul id="sub-categories">
        <li v-for="(subCat, index) in subCategories"
            :key="index"
            :class="{ active: subCat.name == subCategory && subCategory.name }">
          <a href="#"
             @click.prevent="setActiveSubCategory(subCat)">{{subCat.name}}</a>
        </li>
      </ul>
      <a href="#"
         class="next"
         @click.prevent="next('sub-categories')">
        <icon name="next" />
      </a>
    </section>
    <search-bar></search-bar>
  </nav>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import * as types from '@/store/types';
import Icon from '@/components/Icon.vue';
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'categories-menu',
  components: {
    Icon,
    SearchBar,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      categories: types.POSTS_CATEGORIES,
      subCategories: types.POSTS_CATEGORIES_SUBCATEGORIES,
      category: types.POSTS_CATEGORIES_CATEGORY,
      subCategory: types.POSTS_CATEGORIES_SUBCATEGORIES_SUBCATEGORY,
    }),
  },
  created() {
    this.getCategories();
  },
  methods: {
    ...mapMutations({
      setCategory: types.POSTS_CATEGORIES_CATEGORY,
      setSubCategory: types.POSTS_CATEGORIES_SUBCATEGORIES_SUBCATEGORY,
      setSubCategories: types.POSTS_CATEGORIES_SUBCATEGORIES,
    }),

    ...mapActions({
      getCategories: types.POSTS_CATEGORIES,
    }),

    setActiveCategory(cat) {
      this.setCategory(cat);
      this.setSubCategories(cat.children);
    },

    setActiveSubCategory(subCat) {
      this.setSubCategory(subCat);
    },

    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + ((4 - (2 * t)) * t);
    },

    animate(callbackObj, delay) {
      const { requestAnimationFrame } = window;
      let startTime = 0;
      let percentage = 0;
      let animationTime = 0;
      const duration = delay * 1000 || 1000;

      function animation(timestamp) {
        if (startTime === 0) {
          startTime = timestamp;
        } else {
          animationTime = timestamp - startTime;
        }

        if (typeof callbackObj.start === 'function' && startTime === timestamp) {
          callbackObj.start();

          requestAnimationFrame(animation);
        } else if (animationTime < duration) {
          if (typeof callbackObj.progress === 'function') {
            percentage = animationTime / duration;
            callbackObj.progress(percentage);
          }

          requestAnimationFrame(animation);
        } else if (typeof callbackObj.done === 'function') {
          callbackObj.done();
        }
      }

      return requestAnimationFrame(animation);
    },

    sideScroll(el, rangeInPixels) {
      if (el) {
        const sequenceObj = {};
        const seconds = 0.2;
        const startingScrollPosition = el.scrollLeft;

        sequenceObj.progress = ((percentage) => {
          el.scroll((startingScrollPosition + (this.easeInOutQuad(percentage) * rangeInPixels)), 0);
        });

        this.animate(sequenceObj, seconds);
      }
    },

    prev(id) {
      const el = document.getElementById(id);
      const scrollAmount = -el.offsetWidth; // todo this is wrong

      this.sideScroll(el, scrollAmount);
    },

    next(id) {
      const el = document.getElementById(id);
      const scrollAmount = el.scrollLeft + el.offsetWidth;

      this.sideScroll(el, scrollAmount);
    },
  },
};
</script>
<style lang="scss" scoped>
  .topnav {
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
    position: sticky;
    top: 0;
    z-index: 1;

    > section {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
    }

    ul a {
      color: #737373;
      text-decoration: none;
      display: block;
      white-space: nowrap;
      text-transform: uppercase;
      padding: 2rem 1.7rem;
      border-bottom: 2px solid transparent;

      &:hover {
        color: #fff;
      }
    }

    .active {
      a {
        color: #fff;
        border-bottom: 2px solid #E41C69;
      }
    }

    .categories {
      background-color: #131314;
    }

    .sub-categories {
      background-color: #000;
    }

    .categories, .sub-categories {
      padding-left: 2.5rem;

      ul {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        overflow-x: hidden;
        width: 100vw;

        li {
          display: block;
        }
      }
    }

    a.prev, a.next {
      z-index: 2;
    }

    a.prev {
      transform: rotate(180deg);
    }
  }

  @media (min-width: 480px) {
    .categories, .sub-categories {
      width: calc(100vw - 19rem);
    }
  }

  @media (min-width: 1200px) {
    a.prev, a.next {
      display: none !important;
    }
  }
</style>
