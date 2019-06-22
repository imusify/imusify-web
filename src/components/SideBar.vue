<template>
  <div class="sidebar" :class="{ open: isSideBarOpen, isLoggedIn }">
    <div class="sidebar-header">
      <img src="../assets/images/logo/logo.svg" class="sidebar-header__logo" alt="imusify">
      <div class="sidebar-header__auth">
        <button
          @click.prevent="toggleSignup(true)"
          class="btn btn-primary uppercase desktop-only"
        >Sign Up</button>
        <button
          @click.prevent="toggleLogin(true)"
          class="btn btn-default uppercase desktop-only"
        >Sign In</button>
      </div>
    </div>
    <div class="sidebar-menu">
      <router-link to="/">
        <icon name="home"/>
        <span>Home</span>
      </router-link>
      <router-link to="/channels">
        <icon name="channels"/>
        <span>Channels</span>
      </router-link>
      <router-link to="/browse">
        <icon name="browse"/>
        <span>Browse</span>
      </router-link>
      <router-link to="/crowdfunding">
        <icon name="crowdfunding"/>
        <span>Crowdfunding</span>
      </router-link>
      <router-link to="/upload">
        <icon name="upload"/>
        <span>Upload</span>
      </router-link>
      <router-link to="/wallet">
        <icon name="wallet"/>
        <span>Wallet</span>
      </router-link>
      <router-link to="/following">
        <icon name="following"/>
        <span>Following</span>
      </router-link>
    </div>
    <div class="sidebar-footer">
      <router-link to="/about">About</router-link>
      <span>&nbsp;&vert;</span>
      <router-link to="/privacy-policy">&nbsp; Privacy Policy</router-link>
      <span>&nbsp;&vert;</span>
      <router-link to="/legal">&nbsp;Legal</router-link>
      <p>Copyright &copy; 2018 imusify</p>
      <p>All rights reserved</p>
    </div>
  </div>
  <!-- <nav class="sidebar"
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
  </nav>-->
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Icon from "@/components/Icon.vue";
import * as types from "@/store/types";

export default {
  name: "SideBar",
  components: {
    Icon
  },
  props: ["isSideBarOpen"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      token: types.ACCOUNTS_TOKEN,
      user: types.ACCOUNTS_USER,
      token: types.ACCOUNTS_TOKEN,
      isSignupOpen: types.TOGGLER_SIGNUP,
      isLoginOpen: types.TOGGLER_LOGIN
    }),
    isLoggedIn() {
      return Boolean(this.token);
    }
  },
  methods: {
    ...mapMutations({
      toggleSignup: types.TOGGLER_SIGNUP,
      toggleLogin: types.TOGGLER_LOGIN
    })
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/main.scss";
.sidebar {
  background: url("../assets/images/sidebar.png");
  grid-area: sidebar;
  z-index: 999;
  background-size: cover;
  height: 100vh;
  flex: 2;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 200px;
  &::after {
    background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  }
  &-header {
    flex: 1;
    align-self: center;
    &__logo {
      margin-top: calculateRem(19);
    }
    &__auth {
      display: flex;
      flex-direction: column;
      margin-top: calculateRem(20);
      button:last-child {
        margin-top: calculateRem(20);
      }
    }
  }
  &-menu {
    color: $grey;
    flex: 2;
    a {
      padding: calculateRem(16);
      border-bottom: 1px solid $lighter-black-bg;
      color: $link-color;
      font-size: calculateRem(18);
      text-align: center;
      display: flex;
      flex-direction: column;
      i {
        margin-bottom: calculateRem(2);
      }

      &.router-link-exact-active {
        color: #fff;
        background-color: #131314;
      }
    }
    &__item:first-child {
      border-top: 1px solid $lighter-black-bg;
    }
  }
  &-footer {
    align-self: center;
    a {
      color: $grey;
      text-align: center;
      font-size: calculateRem(18);
    }
    span {
      margin-bottom: calculateRem(10);
      color: $grey;
    }
    p {
      color: $grey;
      font-size: calculateRem(15);
    }
  }
}

.active {
  color: $white;
  &.sidebar-menu__item {
    background: $background;
  }
}

@media (max-width: $desktop) {
  .sidebar {
    display: none;
    &-header {
      &__logo {
        margin-top: calculateRem(10);
      }
      flex: 0.5;
    }
    &-footer {
      margin-bottom: calculateRem(10);
    }
  }
}

// .sidebar {
//   align-items: center;
//   flex-direction: column;
//   position: absolute;
//   top: 6.9rem;
//   bottom: 0;
//   left: -17rem;
//   width: 17rem;
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-start;
//   visibility: visible;
//   transition: left .2s ease-in-out;
//   z-index: 2;
//   background: #22201e url("/sidebar-bg.png") no-repeat center center fixed;
//   background-size: cover;

//   &.open {
//     left: 0;
//   }

//   .hamburger, .logo {
//     margin-right: 1rem;
//   }

//   .menu {
//     width: 100%;
//     height: 100%;
//     overflow-y: auto;

//     .active {
//       a {
//         color: #fff;
//       }
//     }

//     a {
//       text-align: center;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       color: #9F9F9F;
//       text-decoration: none;
//       height: 8rem;
//       flex-direction: column;
//       border-bottom: 1px solid #0D0E0E;
//       font-size: 1.4rem;

//       svg {
//         margin-bottom: 1rem;
//       }

//       &:hover {
//         color: #fff;
//         background-color: #131314;
//       }
//     }
//   }

//   footer {
//     font-size: 1rem;
//     color: #7F8080;
//     width: 100%;
//     padding: 1.2rem;

//     nav {
//       display: block;
//       margin-bottom: 1rem;

//       a {
//         color: #7f8080;
//         text-decoration: none;
//       }
//     }
//   }
// }

// @media (min-width: 480px) {
//   .sidebar {
//     left: 0;
//     margin-top: 12rem;
//     width: 19rem;

//     &.isLoggedIn {
//       margin-top: 6rem;
//     }
//   }
// }
</style>
