<template>
  <nav class="sidebar"
       :class="{ open: isSideBarOpen, isLoggedIn }">
    <ul class="menu">
      <li v-on:click="home = !home">
        <router-link to="/">
          <icon name="home"/>
            <div v-bind:class="homeClasses">
            <span >Home</span>
            </div>
        </router-link>
      </li>
      <li v-on:click="channels = !channels">
        <router-link to="/channels">
          <icon name="channels"/>
          <div v-bind:class="channelsClasses">
            <span>Channels</span>
          </div>
        </router-link>
      </li>
      <li v-on:click="browse = !browse">
        <router-link to="/browse">
          <icon name="browse"/>
          <div v-bind:class="browseClasses">
            <span>Browse</span>
          </div>
        </router-link>
      </li>
      <li v-on:click="crowdfunding = !crowdfunding">
        <router-link to="/crowdfunding">
          <icon name="crowdfunding"/>
          <div v-bind:class="crowdfundingClasses">
           <span>Crowd Funding</span>
          </div>
        </router-link>
      </li>
      <li v-on:click="upload = !upload">
        <router-link to="/upload">
          <icon name="upload"/>
          <div v-bind:class="uploadClasses">
            <span>Upload</span>
          </div>
        </router-link>
      </li>
      <li v-on:click="wallet = !wallet">
        <router-link to="/wallet">
          <icon name="wallet"/>
          <div v-bind:class="walletClasses">
            <span>Wallet</span>
          </div>
        </router-link>
      </li> 
      <li v-on:click="following = !following">
        <router-link to="/following">
          <icon name="following"/>
          <div v-bind:class="followingClasses">
            <span>Following</span>
          </div>
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
    return {home: false, channels: false, browse: false, crowdfunding: false, upload: false, wallet: false, following: false};
  },
  computed: {
    ...mapGetters({
      token: types.ACCOUNTS_TOKEN,
    }),
    isLoggedIn() {
      return Boolean(this.token);
    },
    homeClasses:function() {
      return{
        home: this.home,
      }
    },
    channelsClasses:function() {
      return{
        channels: this.channels
      }
    },
    browseClasses:function() {
      return{ 
        browse: this.browse
      }
    },
    crowdfundingClasses:function() {
      return{
        crowdfunding: this.crowdfunding
      }
    },
    uploadClasses:function() {
      return{
        upload: this.upload
      }
    },
    followingClasses:function() {
      return{
        following: this.following
      }
    },
    walletClasses:function() {
      return{
        wallet: this.wallet
      }
    }
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
      span{
        background: #131314;
      }  
      .home span{
        background: #fff;
      }
      .channels span{
        background: #fff;
      }
      .browse span{
        background: #fff;
      }
      .crowdfunding span{
        background: #fff;
      }
      .upload span{
        background: #fff;
      }
      .following span{
        background: #fff;
      }
      .wallet span{
        background: #fff;
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
      margin-top: 12rem;
      width: 19rem;

      &.isLoggedIn {
        margin-top: 6rem;
      }
    }
  }

</style>
