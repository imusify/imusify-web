<template>
 <div class="wrapform">
   <h1 class="heading__">Sign in to imusify</h1>
   <p class="subheading__">In a consequat mi. Etiam sit amet diam in diam ullamcorper consequat.
      Maecenas pellentesque mauris augue, in scelerisque lectus imperdiet et. Nullam ultricies,
      eros quis maximus.
   </p>
   <div class="social-icons">
      <a  href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-soundcloud"></i></a>
   </div>
   <div class="or-ui"><span>OR</span></div>
   <div>
      <form>
         <div class="form-group">
            <label class="control-label">Email address</label>
            <input type="text" id="username" class="form-control" placeholder="Enter your username" v-model="credentials.username">
         </div>
         <div class="form-group">
            <label class="control-label">Password</label>
            <input type="password" id="password" class="form-control" placeholder="Enter your password" v-model="credentials.password">
         </div>
         <div class="form-group">
            <div class="checkbox">
               <label><input type="checkbox"/> <span></span> keep me signed in</label>
            </div>
         </div>
         <div class="cta dubble">
            <button class="button">LOGIN</button>
            <button class="signupbutton">SIGNUP</button>
         </div>
      </form>
   </div>
   <div class="status" v-if="status">
      {{status}}
   </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import * as types from '../store/types';

export default {
  name: 'login',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
      status: '',
    };
  },

  methods: {
    ...mapActions({
      login: types.ACCOUNTS_USER,
    }),
    onSubmit() {
      this.login(this.credentials)
        .then(() => {
          this.$router.replace(this.$route.query.redirect || '/');
        });
    },
  },
};
</script>

