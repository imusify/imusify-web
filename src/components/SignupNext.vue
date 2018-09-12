<template>
    <div class="signupnext">
        <p class="heading">Please complete your registration</p>
        <p class="subheading">In a consequat mi. Etiam sit amet diam in diam ullamcorper
             consequat. Maecenas pellentesque mauris augue, in scelerisque lectus imperdiet et.
              Nullam ultricies, eros quis maximus.</p>
    <div>
        <form>
            <div class="label">
                <label>Email address</label>
                <input style="height: 33px; width:400px; opacity: 0.95; border-style: solid;
                 border-color: #ffffff" type="text" id="username" placeholder="Enter username">
                <label>Password</label>
                <input style="height: 33px; width:400px; opacity: 0.95; border-style: solid;
                 border-color: #ffffff" type="text" id="username" placeholder="Enter username">
                <label>Repeat_Password</label>
                <input style="height: 33px; width:400px; opacity: 0.95; border-style: solid;
                 border-color: #ffffff" type="text" id="username" placeholder="Enter username">
            </div>
            <input class="checkbox" type="checkbox"/>
            <p class="checkboxtext">I acknowledge that I have read and accept the Terms of
            Use Agreement and consent to the Privacy Policy and Video Privacy Policy.</p>
            <input class="checkbox2" type="checkbox"/>
            <p class="checkboxtext2">Subscribe to our Newsletter</p>
            <button class="subbutton">SIGN UP</button>
        </form>
    </div>
    </div>
</template>
<script>
export default {
  name: 'signupnext',
  data() {
    return {};
  },
};
</script>
<style scoped>
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
  top: 245px;

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
  top: 350px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;

  color: #ffffff;
  opacity: 0.3;
}
.checkbox {
  position: absolute;
  left: 475px;
  top: 535px;
}
.checkboxtext {
  position: absolute;
  width: 415px;
  height: 68px;
  left: 470px;
  top: 532px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
}
.subbutton {
  position: absolute;
  left: 480px;
  top: 650px;
  color: #ffffff;
  background-color: #ff1493;
}
.checkbox2 {
  position: absolute;
  left: 475px;
  top: 600px;
}
.checkboxtext2 {
  position: absolute;
  width: 415px;
  height: 68px;
  left: 490px;
  top: 600px;

  font-family: Roboto;
  font-size: 12px;
  color: #ffffff;
}
</style>
