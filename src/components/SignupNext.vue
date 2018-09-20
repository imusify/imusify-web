<template>
  <div class="signupnext wrapform">
    <h1 class="heading">Please complete your registration</h1>
    <p class="subheading">In a consequat mi. Etiam sit amet diam in diam ullamcorper
      consequat. Maecenas pellentesque mauris augue, in scelerisque lectus imperdiet et.
      Nullam ultricies, eros quis maximus.
    </p>
    <form @submit.prevent="profilePage()">
      <div class="form-group">
        <label class="control-label">Email address</label>
        <input type="text" id="username" placeholder="Enter username" class="form-control">
      </div>
      <div class="form-group">
        <label class="control-label">Password</label>
        <input  type="text" id="username" placeholder="Enter username" class="form-control">
      </div>
      <div class="form-group">
        <label class="control-label">Repeat_Password</label>
        <input type="text" id="username" placeholder="Enter username" class="form-control">
      </div>
      <div class="form-group">
        <div class="checkbox long-text">
          <label><input class="checkbox" type="checkbox"/> <span></span>I acknowledge that I
          have read and accept the Terms of Use Agreement and consent to the Privacy Policy
          and Video Privacy Policy.</label>
        </div>
      </div>
      <div class="form-group">
        <div class="checkbox">
          <label><input class="checkbox2" type="checkbox"/> <span></span> Subscribe to our
           Newsletter</label>
        </div>
      </div>
      <div class="cta left">
        <button class="subbutton">SIGN UP</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'signupnext',
  data() {
    return {};
  },
  methods: {
    profilePage() {
      this.$router.push('/profile');
    },
  },
};
</script>
