<template>
  <div class="signup wrapform">
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
    <div class="status" v-if="status">
      {{status}}
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';
import { mapMutations } from 'vuex';
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
    }),
    registerationPage() {
      this.setCredentials(this.credentials);
      this.$router.push('/signupnext');
    },
  },
};
</script>
