<template>
  <section class="artists">
    <categories-menu></categories-menu>
    <artist-list :artists="tracks"></artist-list>
    <audio-player :track="track" />
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';

import CategoriesMenu from '@/components/CategoriesMenu.vue';
import ArtistList from '@/components/artist/ArtistList.vue';
import AudioPlayer from '@/components/AudioPlayer.vue';

export default {
  name: 'artist-list-page',
  components: {
    AudioPlayer,
    CategoriesMenu,
    ArtistList,
  },

  computed: {
    ...mapGetters({
      tracks: types.ARTIST_LIST,
      track: types.TRACK,
    }),
  },

  methods: {
    ...mapActions({
      getArtists: types.ARTIST_LIST,
      getTrack: types.TRACK_GET,
    }),
    ...mapMutations({
      resetArtists: types.ARTIST_LIST,
    }),
  },

  mounted() {
    this.getArtists();
    this.getTrack(1);
  },

  beforeDestroy() {
    this.resetArtists({ id: 1 });
  },
};
</script>
