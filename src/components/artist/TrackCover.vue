<template>
  <div class="track"
       :style="{ backgroundImage: `url(${track.coverUrl})` }">
    <header>
      <span class="cost">
        <span class="fiat">$47</span>
        <span class="divider">/</span>
        <span class="imu">ϑ74</span>
      </span>
      <a href="#"
         class="thumb-button"
         @click.prevent="upvote(track)">
        <icon name="thumb" />
        <icon name="thumbHover" />
      </a>
    </header>
    <a href="#"
       class="play-button"
       @click.prevent="playTrack(track)">
      <icon name="play" />
    </a>
    <footer>
      <h3><a href="#">{{track.title}}</a></h3>
      <h4><router-link :to="`/artist/${track.id}`">{{track.artist}}</router-link></h4>
    </footer>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';
import Icon from '@/components/Icon.vue';

export default {
  name: 'track-cover',
  components: {
    Icon,
  },
  props: ['track'],
  data() {
    return {
      thumbImage: 'thumb',
    };
  },
  methods: {
    ...mapGetters({
      currentTrack: types.TRACK_GET,
    }),

    ...mapMutations({
      setCurrentTrack: types.TRACK,
    }),

    upvote(track) {
      // todo make api call to upvote track
      /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
      console.log(track);
    },

    playTrack(track) {
      this.setCurrentTrack(track);
    },
  },
};
</script>
<style lang="scss" scoped>
@import './src/assets/styles/base.scss';

.track {
  width: 21rem;
  height: 21rem;
  margin-left: .5rem;
  margin-bottom: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.7rem;
  background-position: center center;
  background-size: cover;
  box-shadow: inset 0px 35px 30px -10px #000000b3, inset 0px -35px 30px -5px #000000e6;

  .play-button {
    align-self: center;
  }

  .thumb-button {
    .icon-svg.thumb {
      display: inline-block;
    }

    .icon-svg.thumbHover {
      display: none;
    }

    &:hover {
      .icon-svg.thumb {
        display: none;
      }

      .icon-svg.thumbHover {
        display: inline-block;
      }
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    font-size: 1.4rem;
    font-weight: 700;

    .cost {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .divider {
      color: #E41C69;
      margin: 0 .25rem;
    }
  }

  footer {
    h3 {
      font-size: 1.4rem;
      font-weight: 400;

      a {
        color: #fff;
        text-decoration: none;
      }
    }

    h4 {
      font-size: 1.4rem;
      opacity: .6;
      text-transform: uppercase;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
