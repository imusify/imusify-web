<template>
  <nav class="sidebar"
       :class="{ open: isSideBarOpen }">
    <ul class="menu">
      <li><router-link to="/">
        <icon name="home" />
        <span>Home</span>
      </router-link></li>
      <li><router-link to="/channels">
        <icon name="channels" />
        <span>Channels</span>
      </router-link></li>
      <li><router-link to="/browse">
        <icon name="browse" />
        <span>Browse</span>
      </router-link></li>
      <li><router-link to="/crowdfunding">
        <icon name="crowdfunding" />
        <span>Crowd Funding</span>
      </router-link></li>
      <li><router-link to="/upload">
        <icon name="upload" />
        <span>Upload</span>
      </router-link></li>
      <li><router-link to="/wallet">
        <icon name="wallet" />
        <span>Wallet</span>
      </router-link></li>
      <li><router-link to="/following">
        <icon name="following" />
        <span>Following</span>
      </router-link></li>
    </ul>
  </nav>
</template>
<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'SideBar',
  components: {
    Icon,
  },
  props: ['isSideBarOpen'],
  data() {
    return {
    };
  },
  methods: {
    toggleSideBar() {
      this.isSideBarOpen = !this.isSideBarOpen;
      this.$emit('toggleSideBar', this.isSideBarOpen);
    },
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 6.9rem;
  left: -17rem;
  height: 100vh;
  width: 17rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  visibility: visible;
  transition: left .2s ease-in-out;
  z-index: 1;

  &.open {
    left: 0;
  }

  .hamburger, .logo {
    margin-right: 1rem;
  }

  .menu {
    background: #22201e url("/sidebar-bg.png") no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    width: 100%;

    .active {
      a {
        color: #fff;
      }
    }

    a {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #9F9F9F;
      text-decoration: none;
      height: 8rem;
      flex-direction: column;
      border-bottom: 1px solid #0D0E0E;
      font-size: 1.4rem;

      svg {
        margin-bottom: 1rem;
      }

      &:hover {
        color: #fff;
        background-color: #131314;
      }
    }
  }
}

@media (min-width: 480px) {
  .sidebar {
    left: 0;
    margin-top: 10rem;
    width: 19rem;
  }
}

</style>
