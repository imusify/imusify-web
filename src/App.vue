<template>
  <div id="app">
    <nav>
      <NavBar v-on:toggleSideBar="toggleSideBar" :isSideBarOpen="isSideBarOpen"></NavBar>
      <SideBar v-on:toggleSideBar="toggleSideBar" :isSideBarOpen="isSideBarOpen"></SideBar>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  components: {
    NavBar,
    SideBar
  },

  data() {
    return {
      isSideBarOpen: false
    }
  },

  methods: {
    toggleSideBar(isSideBarOpen){
      this.isSideBarOpen = isSideBarOpen;
    }
  }
}
</script>
<style lang="scss">
@import './src/assets/styles/base.scss';


@media (min-width: 480px) {
  #app {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    > nav {
      width: 19rem;
    }
  }

}
</style>
