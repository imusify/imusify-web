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
        <form @submit.prevent="onUpdateAccount">
          <div class="form-group">
            <label class="control-label">First name</label>
            <input type="text"
                   class="form-control"
                   v-model="user.first_name"
                   placeholder="Enter First name">
          </div>
          <div class="form-group">
            <label class="control-label">Last name</label>
            <input type="text"
                   class="form-control"
                   v-model="user.last_name"
                   placeholder="Enter Last name">
          </div>
          <div class="form-group">
            <label class="control-label">Wallet Address</label>
            <input type="text"
                   class="form-control"
                   v-model="user.wallet_address"
                   placeholder="Enter wallet address">
          </div>
          <div class="form-group">
            <label class="control-label">Date of birth</label>
            <input type="text"
                   class="form-control"
                   v-model="user.date_of_birth"
                   placeholder="_/_/_">
          </div>
          <div class="form-group">
            <label class="control-label">Biography</label>
            <textarea id="biography"
                      v-model="user.bio"
                      placeholder="Enter biography"></textarea>
          </div>
          <div class="form-group">
            <label class="control-label">Gender</label>
            <select v-model="user.gender">
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
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
import { mapActions, mapGetters } from 'vuex';
import Icon from '@/components/Icon.vue';
import * as types from '../store/types';

export default {
  name: 'profile',
  components: {
    Icon,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      status: types.ACCOUNTS_LOGIN_STATUS,
      credentials: types.ACCOUNTS_USER_CREDENTIALS,
      user: types.ACCOUNTS_USER,
    }),
  },
  methods: {
    ...mapActions({
      updateAccount: types.ACCOUNTS_USER_UPDATE,
    }),
    onUpdateAccount() {
      this.updateAccount(this.user)
        .finally(() => {
          this.$router.push('/');
        });
    },
  },
};
</script>
