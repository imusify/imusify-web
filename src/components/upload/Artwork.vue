<template>
  <div class="track-artwork">
    <p>Album artwork</p>
    <div class="track-cta">
      <img src="../../assets/images/icons/artwork-placeholder.png" alt="imusify Album Artwork">
      <button class="btn btn-grey uppercase">
        <icon name="upload"/>Album Artwork
      </button>
    </div>
  </div>
</template>
<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'track-artwork',
  components: {
    Icon,
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/main.scss";

.track-artwork {
  grid-area: artwork;
  display: grid;
  grid-template-rows: 0fr 1fr 0fr;
  p {
    color: $grey;
    font-size: calculateRem(20);
  }
  .track-cta {
    img {
      height: calculateRem(250);
      background-size: cover;
      cursor: pointer;
      width: calculateRem(250);
    }
    button {
      font-size: calculateRem(22);
      margin-top: calculateRem(15);
    }
  }
}
</style>
