<template>
  <ul class="tracks">
    <li v-for="(track, index) in tracks" :key="index">
      <track-cover :track="track" />
    </li>
  </ul>
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
.tracks {
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  flex-wrap: wrap;
  margin-top: 1rem;
  min-height: 100vh;
}
</style>
