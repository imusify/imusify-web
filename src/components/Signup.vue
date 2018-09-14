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
               id="firstName"
               placeholder="First name"
               v-model="credentials.first_name">
      </div>
      <div>
        <input type="text"
               id="lastName"
               placeholder="Last name"
               v-model="credentials.last_name">
      </div>
      <div>
        <input type="text"
               id="birthday"
               placeholder="Date of birth (mm/dd/yyyy)"
               v-model="credentials.date_of_birth">
      </div>
      <div>
        <input type="text"
               id="wallet"
               placeholder="Wallet address"
               v-model="credentials.wallet_address">
      </div>
      <div>
        <input type="text"
               id="gender"
               placeholder="Gender"
               v-model="credentials.gender">
      </div>
      <div>
        <input type="text"
               id="bio"
               placeholder="Bio"
               v-model="credentials.bio">
      </div>
      <div>
        <input type="text"
               id="image"
               placeholder="Image"
               v-model="credentials.image">
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
import moment from 'moment';
import { mapActions } from 'vuex';
import * as types from '../store/types';

export default {
  name: 'signup',
  data() {
    return {
      credentials: {
        date_of_birth: '',
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        wallet_address: '',
        password: '',
        passwordRepeat: '',
        gender: '',
        bio: '',
        image: '',
        date_created: '',
      },
      status: '',
    };
  },

  methods: {
    ...mapActions({
      signup: types.ACCOUNTS_SIGNUP,
    }),
    onSubmit() {
      this.credentials.date_created = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');

      if (!this.credentials.date_of_birth) {
        delete this.credentials.date_of_birth;
      }

      this.signup(this.credentials)
        .then(() => {
          this.$router.push('/');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
