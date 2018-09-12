<template>
    <div>
        <p class="heading">Complete your profile</p>
        <img class="images" />
        <button class="uploadbutton">UPLOAD IMAGE</button>
        <div>
            <form>
                <div class="label">
                    <label>First name</label>
                    <input style="height: 33px; width:400px; opacity: 0.95; border-style: solid;
                     border-color: #ffffff" type="text" id="username"
                     placeholder="Enter First name">
                    <label>Last name</label>
                    <input style="height: 33px; width:400px; opacity: 0.95; border-style: solid;
                     border-color: #ffffff" type="text" id="username" placeholder="Enter Last name">
                    <label>Country</label>
                    <select style="height: 33px; width:400px; opacity: 0.95; border-style: solid;
                     border-color: #ffffff" type="text" id="username"></select>
                    <label>State</label>
                    <select style="height: 33px; width:400px; opacity: 0.95; border-style: solid;
                     border-color: #ffffff" type="text" id="username"></select>
                    <label>City</label>
                    <select style="height: 33px; width:400px; opacity: 0.95; border-style: solid;
                     border-color: #ffffff" type="text" id="username"></select>
                    <label>Date of birth</label>
                    <input style="height: 33px; width:400px; opacity: 0.95; border-style: solid;
                     border-color: #ffffff" type="text" id="username" placeholder="_/_/_">
                </div>
                    <button class="savebutton">SAVE SETTINGS</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'profile',
  data() {},
};
</script>
<style>
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
.images {
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  left: 340px;
  top: 220px;
  background: url('../assets/logo.png');
}
.label {
  position: absolute;
  width: 89px;
  height: 17px;
  left: 550px;
  top: 220px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;

  color: #ffffff;
  opacity: 0.3;
}
.savebutton {
  position: absolute;
  left: 550px;
  top: 600px;
  color: #ffffff;
  background-color: #ff1493;
}
.uploadbutton {
  position: absolute;
  left: 330px;
  top: 420px;
}
</style>
