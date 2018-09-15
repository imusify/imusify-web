<template>
  <div class="signup wrapform">
     <h1 class="heading__">Sign up to imusify</h1>
     <p class="subheading__">In a consequat mi. Etiam sit amet diam in diam ullamcorper consequat.
        Maecenas pellentesque mauris augue, in scelerisque lectus imperdiet et.
        Nullam ultricies, eros quis maximus.
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
              <input type="text" id="username" class="form-control" placeholder="Enter username"
                 v-model="credentials.username">
           </div>
           <div class="cta">
              <button class="button" v-on:click="registerationPage()" >SIGN UP</button>
           </div>
        </form>
     </div>
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
        username: '',
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
      this.signup(this.credentials)
        .then(() => {
          this.$router.push('/');
        });
    },
    registerationPage() {
      this.$router.push('/signupnext');
    },
  },
};
</script>
 