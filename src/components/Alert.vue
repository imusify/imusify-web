<template>
  <div class="alert-message success" v-if="this.$store.state.alert.isShown">
    <i class="imu imu-info"></i>
    <span>Upload successful.</span>
    <i class="imu" :class="'imu-'+alertType"></i>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import * as types from "@/store/types";
export default {
  computed: {
    ...mapGetters({
      alert: types.ALERT
    })
  },
  methods: {
    ...mapActions({
      hideAlert: types.ALERT
    }),

    async closeAlert(e) {
      e.preventDefault();
      this.hideAlert(false);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/main.scss";
.error {
  span {
    color: $white;
  }
}
.success {
  span {
    color: $background;
  }
}
</style>