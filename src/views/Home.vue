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
  name: 'Home',
  components: {
    AudioPlayer,
    CategoriesMenu,
    TrackList,
  },

  computed: {
    ...mapGetters({
      tracks: types.TRACK_LIST,
      track: types.TRACK,
    }),
  },

  methods: {
    ...mapActions({
      getTracks: types.TRACK_LIST,
      getTrack: types.TRACK_GET,
    }),
    ...mapMutations({
      resetTracks: types.TRACK_LIST,
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
