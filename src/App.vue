<template>
  <div id="app">
    <aside>
      <NavBar v-on:toggleSideBar="toggleSideBar" :isSideBarOpen="isSideBarOpen"></NavBar>
      <SideBar v-on:toggleSideBar="toggleSideBar" :isSideBarOpen="isSideBarOpen"></SideBar>
    </aside>
    <router-view/>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  components: {
    NavBar,
    SideBar,
  },

  data() {
    return {
      isSideBarOpen: false,
    };
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
