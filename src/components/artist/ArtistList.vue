<template>
  <ul class="artists">
    <li v-for="(artist, index) in artists" :key="index">
      <artist-node :artist="artist" />
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
  props: ['artists'],
};
</script>
<style lang="scss" scoped>
  .artists {
    display: flex;
    justify-content: flex-start;
    flex-grow: 1;
    flex-wrap: wrap;
    margin-top: 1rem;
    min-height: 100vh;
  }
</style>
