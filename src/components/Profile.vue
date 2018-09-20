<template>
  <div class="wrapform lg">
    <h1 class="heading">Complete your profile</h1>
    <div class="two-column">
      <div class="left-sec">
        <img src="../assets/logo.png" />
        <button class="uploadbutton">
          <span class="icon-svg upload">
            <icon name="imageUpload" />
          </span>
          upload image
        </button>
      </div>
      <div class="right-sec">
        <form>
          <div class="form-group">
            <label class="control-label">First name</label>
            <input  type="text" class="form-control"  id="username"
              placeholder="Enter First name">
          </div>
          <div class="form-group">
            <label class="control-label">Last name</label>
            <input  type="text" class="form-control" id="username"
              placeholder="Enter Last name">
          </div>
          <div class="form-group">
            <label class="control-label">Country</label>
            <select type="text" class="form-control" id="username"></select>
          </div>
          <div class="form-group">
            <label class="control-label">State</label>
            <select  type="text" class="form-control" id="username"></select>
          </div>
          <div class="form-group">
            <label class="control-label">City</label>
            <select type="text" class="form-control" id="username"></select>
          </div>
          <div class="form-group">
            <label class="control-label">Date of birth</label>
            <input type="text" class="form-control" id="username" placeholder="_/_/_">
          </div>
          <div class="cta left">
            <button class="savebutton">SAVE SETTINGS</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'profile',
  components: {
    Icon,
  },
  data() {
    return {};
  },
};
</script>
