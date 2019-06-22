<template>
  <div class="track-list">
    <div v-for="(track, index) in tracks" :key="index">
      <track-cover :track="track"/>
    </div>
  </div>
  <!-- <ul class="track-list">
    <li v-for="(track, index) in tracks" :key="index">
      <track-cover :track="track"/>
    </li>
  </ul>-->
</template>
<script>
import TrackCover from '@/components/artist/TrackCover.vue';

export default {
  name: 'track-list',
  components: {
    TrackCover,
  },
  props: ['tracks'],
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/main.scss";
// .tracks {
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-start;
//   flex-wrap: wrap;
//   margin-top: 1rem;
// }
.track-list {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: auto;
  grid-gap: calculateRem(1);
  margin-left: calculateRem(30);
  overflow: hidden;
  &__item {
    background-size: cover;
    height: calculateRem(200);
    width: calculateRem(200);
    display: flex;
    flex-direction: column;
    padding: calculateRem(10);
    margin-bottom: calculateRem(5);
  }
  &__price {
    flex: 2;
  }
  &__play {
    flex: 1.5;
    align-self: center;
  }
  &__title {
    flex: 0.5;
    color: $white;
  }
  &__author {
    color: $grey;
  }
}

@media (max-width: $desktop) {
  .track-list {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-gap: 0;
    &__item {
      height: calculateRem(180);
      width: calculateRem(180);
      margin-left: calculateRem(2);
      padding: calculateRem(1);
    }
    &__price {
      padding: calculateRem(5);
    }
    &__play {
      padding: calculateRem(5);
    }
    &__title {
      padding: calculateRem(5);
    }
    &__author {
      padding: calculateRem(5);
    }
  }
}
</style>
