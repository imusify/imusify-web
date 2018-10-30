<template>
  <section class="home" v-if="!isLoading">
    <categories-menu></categories-menu>
    <section class="lists">
      <transition :name="transitionName">
        <track-list :tracks="tracks" v-if="selected == 'tracks'"></track-list>
        <artist-list :artists="artists" v-else></artist-list>
      </transition>
    </section>
    <artist-track-toggler :selected="selected"></artist-track-toggler>
    <audio-player :track="track" />
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import CategoriesMenu from '@/components/CategoriesMenu.vue';
import TrackList from '@/components/artist/TrackList.vue';
import ArtistList from '@/components/artist/ArtistList.vue';
import * as types from '@/store/types';
import AudioPlayer from '@/components/AudioPlayer.vue';
import ArtistTrackToggler from '@/components/ArtistTrackToggler.vue';

export default {
  name: 'Home',
  components: {
    AudioPlayer,
    CategoriesMenu,
    ArtistList,
    TrackList,
    ArtistTrackToggler,
  },

  data() {
    return {
      isLoading: true,
    };
  },

  computed: {
    ...mapGetters({
      artists: types.ARTIST_LIST,
      tracks: types.POST_LIST,
      track: types.TRACK,
    }),

    selected() {
      return this.$route.path === '/' ? 'tracks' : 'artists';
    },

    transitionName() {
      return this.selected === 'artists' ? 'slide-left' : 'slide-right';
    },
  },

  methods: {
    ...mapActions({
      getArtists: types.ARTIST_LIST,
      getTracks: types.POST_LIST,
      getTrack: types.TRACK_GET,
    }),
    ...mapMutations({
      resetArtists: types.ARTIST_LIST,
      resetTracks: types.POST_LIST,
    }),
  },

  mounted() {
    this.getArtists()
      .then(this.getTracks)
      .then(() => {
        this.isLoading = false;
      });
    this.getTrack(1);
  },

  beforeDestroy() {
    this.resetTracks({ id: 1 });
    this.resetArtists({ id: 1 });
  },
};
</script>
<style lang="scss" scoped>
.home {
  transform: translateY(1px); /* fix sticky 1px gap with audio player */

  .lists {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
  }
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: transform;
  transition-timing-function: linear;
  overflow: hidden;
  z-index: 0;
}

.slide-left-enter,
.slide-right-leave-active {
  transform: translate(calc(100vw), 0);
}

.slide-left-leave-active,
.slide-right-enter {
  transform: translate(calc(-100vw), 0);
}
</style>
