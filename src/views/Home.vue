<template>
  <section class="home">
    <categories-menu></categories-menu>
    <track-list :tracks="tracks"></track-list>
    <audio-player :track="track" />
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import CategoriesMenu from '@/components/CategoriesMenu.vue';
import TrackList from '@/components/artist/TrackList.vue';
import * as types from '@/store/types';
import AudioPlayer from '@/components/AudioPlayer.vue';

export default {
  name: 'home',
  components: {
    AudioPlayer,
    CategoriesMenu,
    TrackList,
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
