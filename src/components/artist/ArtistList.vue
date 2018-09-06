<template>
  <ul class="tracks">
    <li v-for="(track, index) in tracks" :key="index">
      <artist-node :track="track" />
    </li>
  </ul>
</template>
<script>
import ArtistNode from '@/components/artist/ArtistNode.vue';

export default {
  name: 'artist-list',
  components: {
    ArtistNode,
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
  }
</style>
