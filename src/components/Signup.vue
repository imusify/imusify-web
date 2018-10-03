<template>
  <section class="signup">
    <a href="" @click.prevent="toggleSignupOpen" class="signup-close">
      <Icon name="close" />
    </a>
    <div class="body">
      <h1 class="heading">Sign up to imusify</h1>
      <p class="subheading">In a consequat mi. Etiam sit amet diam in diam ullamcorper consequat.
        Maecenas pellentesque mauris augue, in scelerisque lectus imperdiet et.
        Nullam ultricies, eros quis maximus.
      </p>
      <div class="social-icons">
        <a  href="#">
          <icon name="facebook" />
        </a>
        <a  href="#">
          <icon name="linkedin" />
        </a>
        <a  href="#">
          <icon name="cloud" />
        </a>
      </div>
      <div class="or-ui"><span>OR</span></div>
      <div>
        <form @submit.prevent="registerationPage()">
          <div class="form-group">
            <label class="control-label">Email address</label>
            <input type="text" id="username" class="form-control" placeholder="Enter email"
              v-model="credentials.email">
          </div>
          <div class="cta">
            <button class="button">SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from '@/components/Icon.vue';
import { mapGetters, mapMutations } from 'vuex';
import * as types from '../store/types';

export default {
  name: 'signup',
  components: {
    Icon,
  },
  data() {
    return {
      credentials: {
        email: '',
      },
    };
  },
  methods: {
    ...mapMutations({
      setCredentials: types.ACCOUNTS_USER_CREDENTIALS,
      isSignupOpen: types.TOGGLER_SIGNUP,
    }),
    registerationPage() {
      this.setCredentials(this.credentials);
      this.isSignupOpen(false);
      this.$router.push('/signupnext');
    },

    toggleSignupOpen() {
      this.$emit('toggleSignupOpen', false);
    },
  },
};
</script>
<style lang="scss" scoped>
  .signup {
    position: fixed;
    max-width: auto;
    margin: 0;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    display: flex;
    justify-content: center;
    align-items: center;

    a.signup-close {
      color: #fff;
      font-weight: 700;
      position: absolute;
      top: 2rem;
      right: 2rem;
      text-decoration: none;
    }

    .body {
      max-width: 60rem;
    }
  }

  @media (min-width: 480px) {

  }
</style>
