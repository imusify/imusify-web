<template>
  <div class="signup">
    <p class="heading">Sign up to imusify</p>
    <p class="subheading">In a consequat mi. Etiam sit amet diam in diam ullamcorper consequat.
       Maecenas pellentesque mauris augue, in scelerisque lectus imperdiet et.
        Nullam ultricies, eros quis maximus.</p>
    <a class="fa fa-facebook"></a>
    <a class="fa fa-linkedin"></a>
    <a class="fa fa-soundcloud"></a>
    <hr><p class="margin">OR</p>
  <div>
    <form>
      <div class="label">
        <label>Email address</label>
        <input style="height: 33px; width:400px; opacity: 0.95; border-style: solid;
         border-color: #ffffff" type="text" id="username" placeholder="Enter username"
          v-model="credentials.username">
      </div>
      <button class="button" v-on:click="registerationPage()" >SIGNUP</button>
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

<style lang="scss" scoped>
.heading {
  /* Sign in to imusify */

  position: absolute;
  width: 415px;
  height: 68px;
  left: 470px;
  top: 120px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  line-height: 56px;
  font-size: 40px;
  text-align: center;

  color: #ffffff;
}
.subheading {
  position: absolute;
  width: 415px;
  height: 68px;
  left: 470px;
  top: 195px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
}

.fa {
  // padding: 10px;
  // font-size: 30px;
  // width: 40px;
  // text-align: center;
  // text-decoration: none;
  // margin: 5px 2px;

  padding: 7px;
  font-size: 30px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}

.fa-facebook {
  position: absolute;
  left: 600px;
  top: 300px;
  background: black;
  color: white;
}
.fa-linkedin {
  position: absolute;
  left: 650px;
  top: 300px;
  background: black;
  color: white;
}
.fa-soundcloud {
  position: absolute;
  left: 700px;
  top: 300px;
  background: black;
  color: white;
}
.margin {
  position: absolute;
  left: 660px;
  top: 380px;
}
.label {
  position: absolute;
  width: 89px;
  height: 17px;
  left: 480px;
  top: 430px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;

  color: #ffffff;
  opacity: 0.3;
}
.button {
  position: absolute;
  left: 620px;
  top: 520px;
  color: #ffffff;
  background-color: #ff1493;
}
</style>
