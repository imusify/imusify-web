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
        v-if="!isLoggedIn"
         class="thumb-button"
         @click.prevent="toggleLogin(true)">
        <icon name="thumb" />
        <icon name="thumbHover" />
      </a>
      <a href="#"
         class="thumb-button"
         :class="{ voted_up: track.voted_up }"
         v-else
         @click.prevent="upvoteTrack()">
        <icon name="thumb" />
        <icon name="thumbHover" />
      </a>
    </header>
    <a href="#"
       class="play-button"
       @click.prevent="playTrack()"
       v-if="!isPlaying">
      <icon name="play" />
    </a>
    <a href="#"
       class="pause-button"
       @click.prevent="pauseTrack()"
       v-if="isPlaying">
      <icon name="pause" />
    </a>
    <footer>
      <h3><a href="#">{{track.title}}</a></h3>
      <h4><router-link :to="`/artist/${track.id}`">{{track.artist}}</router-link></h4>
    </footer>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
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
  computed: {
    isPlaying() {
      if (!this.currentTrack) return false;

      return this.$store.state.isTrackPlaying && this.currentTrack.id === this.track.id;
    },

    isLoggedIn() {
      return Boolean(this.token);
    },
    ...mapGetters({
      user: types.ACCOUNTS_USER,
      token: types.ACCOUNTS_TOKEN,
      currentTrack: types.POST,
    }),
  },
  methods: {
    ...mapActions({
      upvote: types.POST_UPVOTE,
      downvote: types.POST_DOWNVOTE,
      setCurrentTrack: types.POST,
    }),

    ...mapMutations({
      toggleLogin: types.TOGGLER_LOGIN,
    }),

    playTrack() {
      this.setCurrentTrack(this.track);
    },

    pauseTrack() {
      this.setCurrentTrack(null);
    },

    upvoteTrack() {
      this.upvote(this.track)
        .then(() => {
          this.track.voted_up += 1;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./src/assets/styles/base.scss";

.track {
  width: 18rem;
  height: 18rem;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.7rem;
  background-position: center center;
  background-size: cover;
  box-shadow: inset 0px 35px 30px -10px #000000b3,
    inset 0px -35px 30px -5px #000000e6;

  .play-button, .pause-button {
    align-self: center;
  }

  .thumb-button {
    .icon-svg.thumb {
      display: inline-block;
    }

    .icon-svg.thumbHover {
      display: none;
    }

    &:hover, &.voted_up {
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
      color: #e41c69;
      margin: 0 0.25rem;
    }
  }

  footer {
    h3 {
      font-size: 1.4rem;
      font-weight: 400;

      a {
        color: #fff;
        text-decoration: none;
        word-break: break-word;
      }
    }

    h4 {
      font-size: 1.4rem;
      opacity: 0.6;
      text-transform: uppercase;

      a {
        color: #fff;
        text-decoration: none;
        word-break: break-word;
      }
    }
  }
}
</style>
