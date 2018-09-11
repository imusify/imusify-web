<template>
  <div id="app">
    <aside>
      <NavBar v-on:toggleSideBar="toggleSideBar" :isSideBarOpen="isSideBarOpen"></NavBar>
      <SideBar v-on:toggleSideBar="toggleSideBar" :isSideBarOpen="isSideBarOpen"></SideBar>
    </aside>
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
    };
  },
  computed: {
    ...mapGetters({
      loading: types.LOADING,
    }),
  },
  methods: {
    toggleSideBar(isSideBarOpen) {
      this.isSideBarOpen = isSideBarOpen;
    },
  },
};
</script>
<style lang="scss">
@import './src/assets/styles/base.scss';
@media (min-width: 480px) {
  #app {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;

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
