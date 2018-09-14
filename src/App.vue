<template>
  <div id="app">
    <aside>
      <NavBar v-on:toggleSideBar="toggleSideBar" :isSideBarOpen="isSideBarOpen"></NavBar>
      <SideBar v-on:toggleSideBar="toggleSideBar" :isSideBarOpen="isSideBarOpen"></SideBar>
      {{isHeaderActive}}
    </aside>
    <header class="toast" :class="{ active: isHeaderActive, error: isToastError() }">
      <h1 v-if="status">{{status}}</h1>
      <a href="#" @click.prevent="isHeaderActive = false">x</a>
    </header>
    <router-view></router-view>
    <spinner v-if="loading"></spinner>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';
import Spinner from '@/components/Spinner.vue';
import * as types from '@/store/types';

export default {
  components: {
    NavBar,
    SideBar,
    Spinner,
  },

  data() {
    return {
      isSideBarOpen: false,
      isHeaderActive: false,
    };
  },

  computed: {
    ...mapGetters({
      loading: types.LOADING,
      status: types.ACCOUNTS_LOGIN_STATUS,
    }),
  },

  methods: {
    toggleSideBar(isSideBarOpen) {
      this.isSideBarOpen = isSideBarOpen;
    },
    isToastError() {
      return this.status && this.status.toLowerCase().indexOf('invalid') > -1;
    },
  },

  watch: {
    status(val) {
      this.isHeaderActive = Boolean(val);
    },
  },

  mounted() {
    setTimeout(() => {
      this.isHeaderActive = false;
    }, 5000);
  },
};
</script>
<style lang="scss">
@import './src/assets/styles/base.scss';

#app {
  .toast {
    position: fixed;
    top: -3rem;
    right: 0;
    left: 0;
    color: #efe;
    background-color: rgba(0, 255, 0, .6);
    z-index: 2;
    transition: top .5s ease-in-out;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.error {
      color: #fee;
      background-color: rgba(255, 0, 0, .6);
    }


    &.active {
      top: 0;
    }

    h1 {
      padding: .5rem 1rem;
      font-size: 1.6rem;
      font-weight: normal;
    }

    a {
      color: #fff;
      display: block;
      width: 2rem;
      height: 2rem;
      font-weight: 700;
      text-decoration: none;
    }
  }
}

@media (min-width: 480px) {
  #app {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;

    .toast {
      left: 19rem;
    }

    > aside {
      width: 19rem;
      position: sticky;
      top: 0;
      left: 0;
      bottom: 0;
      height: 100vh;
    }
  }

}
</style>
