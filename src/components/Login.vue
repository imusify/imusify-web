<template>
  <div>
    <p class="heading">Sign in to imusify</p>
    <p class="subheading">In a consequat mi. Etiam sit amet diam in diam ullamcorper consequat.
       Maecenas pellentesque mauris augue, in scelerisque lectus imperdiet et. Nullam ultricies,
        eros quis maximus.</p>
    <a class="fa fa-facebook"></a>
    <a class="fa fa-linkedin"></a>
    <a class="fa fa-soundcloud"></a>
    <hr><p class="margin">OR</p>
    <div>
      <form>
        <div class="label">
          <label>Email address</label>
          <input style="height: 33px; width:400px; opacity: 0.95" type="text" id="username"
           placeholder="Enter username" v-model="credentials.username">
          <label>Password</label>
          <input style="height: 33px; width:400px" type="password" id="password"
           placeholder="Enter password" v-model="credentials.password">
          <input type="checkbox"/>keep me signed in
        </div>
          <button class="button">LOGIN</button>
          <button class="signupbutton">SIGNUP</button>
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

<style lang="scss" scoped>
.heading {
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
.label {
  position: absolute;
  width: 89px;
  height: 17px;
  left: 480px;
  top: 400px;

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
  left: 480px;
  top: 550px;
  color: #ffffff;
  background-color: #ff1493;
}
.signupbutton {
  position: absolute;
  left: 770px;
  top: 550px;
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
  left: 650px;
  top: 380px;
}
hr {
  position: absolute;
  left: 600px;
  top: 380px;
  margin-left: auto;
}
</style>
