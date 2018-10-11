<template>
  <section class="signupnext">
    <div class="body">
      <h1 class="heading">Please complete your registration: {{credentials.email}}</h1>
      <p class="subheading">In a consequat mi. Etiam sit amet diam in diam ullamcorper
        consequat. Maecenas pellentesque mauris augue, in scelerisque lectus imperdiet et.
        Nullam ultricies, eros quis maximus.
      </p>
      <form @submit.prevent="onSubmit()">
        <div class="form-group">
          <label class="control-label">Username</label>
          <input type="text"
                 id="username"
                 placeholder="Enter username"
                 class="form-control"
                 v-model="credentials.username">
        </div>
        <div class="form-group">
          <label class="control-label">Password</label>
          <input type="text"
                 id="password"
                 placeholder="Enter password"
                 class="form-control"
                 v-model="credentials.password">
        </div>
        <div class="form-group">
          <label class="control-label">Repeat Password</label>
          <input type="text"
                 id="passwordConfirm"
                 placeholder="Confirm password"
                 class="form-control"
                 v-model="credentials.confirmPassword">
        </div>
        <div class="form-group">
          <div class="checkbox long-text">
            <label>
              <input class="checkbox" type="checkbox"/>
              I acknowledge that I have read and accept the Terms of Use Agreement
              and consent to the Privacy Policy and Video Privacy Policy.</label>
          </div>
        </div>
        <div class="form-group">
          <div class="checkbox">
            <label>
              <input class="checkbox2" type="checkbox"/>
              Subscribe to our Newsletter</label>
          </div>
        </div>
        <div class="cta left">
          <button class="subbutton">SIGN UP</button>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import moment from 'moment';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '../store/types';

export default {
  name: 'signupnext',
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      status: types.ACCOUNTS_LOGIN_STATUS,
      token: types.ACCOUNTS_TOKEN,
      credentials: types.ACCOUNTS_USER_CREDENTIALS,
    }),
  },
  methods: {
    ...mapActions({
      signup: types.ACCOUNTS_SIGNUP,
    }),
    ...mapMutations({
      status: types.ACCOUNTS_LOGIN_STATUS,
    }),
    onSubmit() {
      if (this.credentials.password !== this.credentials.confirmPassword) {
        this.status('Passwords do not match');
        return false;
      }

      delete this.credentials.confirmPassword;

      this.credentials.date_created = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
      this.credentials.date_of_birth = moment('1970-01-01').format('YYYY-MM-DD');

      return this.signup(this.credentials)
        .then(() => {
          this.$router.push('/');
        });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
