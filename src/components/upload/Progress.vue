<template>
  <div class="upload-progress">
    <img src="../../assets/images/icons/upload-icon.png" alt="imusify Progress Upload">
    <div class="upload-progress__text">
      <h4 class="uppercase">Upload Your Track</h4>
      <span>Drag and drop or click here to start the upload</span>
    </div>
  </div>
</template>
font-size: calculateRem(18);
<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'artworkProgress',
  components: {
    Icon,
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/main.scss";

.upload-progress {
  height: calculateRem(160);
  background: $background !important;
  border: 1px dashed $grey;
  border-radius: calculateRem(3);
  padding: calculateRem(20);
  display: flex;
  img {
    width: calculateRem(120);
    height: calculateRem(120);
  }
  &__text {
    flex: 1;
    align-self: center;
    margin-left: calculateRem(30);
    h4 {
      margin-bottom: calculateRem(10);
    }
    span {
      color: $grey;
      font-size: calculateRem(18);
    }
  }
}
</style>
