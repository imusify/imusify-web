<template>
  <section class="activate-user">
    <form @submit.prevent="onActivateAccount">
      <h1>Activate Account</h1>
      <input type="text" v-model="code" />
      <button>Activate Account</button>
    </form>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '../store/types';

export default {
  name: 'activate-user',
  computed: {
    ...mapGetters({
      status: types.ACCOUNTS_LOGIN_STATUS,
      token: types.ACCOUNTS_TOKEN,
    }),

    code() {
      return this.$route.params.code;
    },
  },
  methods: {
    ...mapActions({
      activate: types.ACCOUNTS_USER_ACTIVATE,
    }),
    ...mapMutations({
      resetArtists: types.ARTIST_LIST,
      resetTracks: types.TRACK_LIST,
    }),
    activateAccount() {
      if (!this.code) {
        return;
      }

      this.activate(this.code)
        .finally(() => {
          this.$router.push('/profile');
        });
    },
  },

  mounted() {
    this.activateAccount();
  }
};
</script>
<style lang="scss" scoped>
</style>
