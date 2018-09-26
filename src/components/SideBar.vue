<template>
  <nav class="sidebar"
       :class="{ open: isSideBarOpen, isLoggedIn }">
    <ul class="menu">
      <li>
        <router-link to="/">
          <icon name="home"/>
          <span>Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/channels">
          <icon name="channels"/>
          <span>Channels</span>
        </router-link>
      </li>
      <li>
        <router-link to="/browse">
          <icon name="browse"/>
          <span>Browse</span>
        </router-link>
      </li>
      <li>
        <router-link to="/crowdfunding">
          <icon name="crowdfunding"/>
          <span>Crowd Funding</span>
        </router-link>
      </li>
      <li>
        <router-link to="/upload">
          <icon name="upload"/>
          <span>Upload</span>
        </router-link>
      </li>
      <li>
        <router-link to="/wallet">
          <icon name="wallet"/>
          <span>Wallet</span>
        </router-link>
      </li>
      <li>
        <router-link to="/following">
          <icon name="following"/>
          <span>Following</span>
        </router-link>
      </li>
    </ul>
    <footer>
      <nav>
        <router-link to="/about">About</router-link>
        |
        <router-link to="/privacy">Privacy Policy</router-link>
        |
        <router-link to="/legal">Legal</router-link>
      </nav>
      <p>Copyright © 2018 imusify</p>
      <p>All rights reserved</p>
    </footer>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex';
import Icon from '@/components/Icon.vue';
import * as types from '@/store/types';

export default {
  name: 'SideBar',
  components: {
    Icon,
  },
  props: ['isSideBarOpen'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      token: types.ACCOUNTS_TOKEN,
    }),
    isLoggedIn() {
      return Boolean(this.token);
    },
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
    bottom: 0;
    left: -17rem;
    width: 17rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    visibility: visible;
    transition: left .2s ease-in-out;
    z-index: 2;
    background: #22201e url("/sidebar-bg.png") no-repeat center center fixed;
    background-size: cover;

    &.open {
      left: 0;
    }

    .hamburger, .logo {
      margin-right: 1rem;
    }

    .menu {
      width: 100%;
      height: 100%;
      overflow-y: auto;

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

    footer {
      font-size: 1rem;
      color: #7F8080;
      width: 100%;
      padding: 1.2rem;

      nav {
        display: block;
        margin-bottom: 1rem;

        a {
          color: #7f8080;
          text-decoration: none;
        }
      }
    }
  }

  @media (min-width: 480px) {
    .sidebar {
      left: 0;
      margin-top: 10rem;
      width: 19rem;

      &.isLoggedIn {
        margin-top: 6rem;
      }
    }
  }

</style>
