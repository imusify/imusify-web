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
      tracks: types.ARTISTS_TRACK_LIST,
      track: types.ARTIST_TRACK,
    }),
  },

  methods: {
    ...mapActions({
      getTracks: types.ARTISTS_TRACK_LIST,
      getTrack: types.ARTIST_TRACK_GET,
    }),
    ...mapMutations({
      resetTracks: types.ARTISTS_TRACK_LIST,
    }),
  },

  mounted() {
    this.getTracks();
    this.getTrack(1);
  },

  beforeDestroy() {
    this.resetTracks({ id: 1 });
  },
};
</script>
