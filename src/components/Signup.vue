<template>
  <div class="signup">
    <h1>Join with your email address</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <input type="text"
               id="username"
               placeholder="Enter username"
               v-model="credentials.username">
      </div>
      <div>
        <input type="email"
               id="email"
               placeholder="Enter email"
               v-model="credentials.email">
      </div>
      <div>
        <input type="text"
               id="phone"
               placeholder="Enter phone"
               v-model="credentials.phone">
      </div>
      <div>
        <input type="password"
               id="password"
               placeholder="Enter password"
               v-model="credentials.password">
      </div>
      <div>
        <input type="password"
               id="passwordRepeat"
               placeholder="Enter password again"
               v-model="credentials.passwordRepeat">
      </div>
      <div class="actions">
        <button>Signup</button>
      </div>
    </form>
    <div class="status" v-if="status">
      {{status}}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import * as types from '../store/types';

export default {
  name: 'signup',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
        passwordRepeat: '',
        email: '',
        phone: '',
      },
      status: '',
    };
  },

  methods: {
    ...mapActions({
      signup: types.ACCOUNTS_SIGNUP,
    }),
    onSubmit() {
      this.signup(this.credentials)
        .then(() => {
          this.$router.push('dashboard');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
