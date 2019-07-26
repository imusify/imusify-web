<template>
  <section class="signup modal">
    <a href @click.prevent="toggleSignupOpen" class="close">
      <Icon name="close"/>
    </a>
    <div class="body">
      <h1 v-if="false" class="heading">Sign up to imusify</h1>
      <p v-if="false" class="subheading">
        In a consequat mi. Etiam sit amet diam in diam
        ullamcorper consequat. Maecenas pellentesque mauris augue, in scelerisque
        lectus imperdiet et. Nullam ultricies, eros quis maximus.
      </p>
      <social-icons v-if="false"></social-icons>
      <div class="or-ui" v-if="false">
        <span>OR</span>
      </div>
      <div>
        <form @submit.prevent="registerationPage()">
          <div class="form-group">
            <label class="control-label">Email address</label>
            <input
              type="text"
              id="username"
              class="form-control"
              placeholder="email@example.com"
              v-model="credentials.email"
            >
          </div>
          <div class="cta">
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from '@/components/Icon.vue';
import SocialIcons from '@/components/SocialIcons.vue';
import { mapMutations } from 'vuex';
import * as types from '../store/types';

export default {
  name: 'signup',
  components: {
    Icon,
    SocialIcons,
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
@import "./src/assets/styles/base.scss";

.body {
  max-width: 50rem !important;
  .heading {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 4rem;
  }
  .subheading {
    text-align: center;
    margin-bottom: 4rem;
  }
  .cta {
    margin-top: 4rem;
  }
}
</style>
