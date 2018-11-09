<template>
  <div class="audio-player">
    <div class="track" v-if="track">
      <!--<div class="cover"-->
           <!--:style="{ backgroundImage: `url(${track.coverUrl})` }"></div>-->
      <aside>
        <h3>{{track.title}}</h3>
        <h4>{{track.artist}}</h4>
      </aside>
    </div>
    <div class="controls" v-if="track">
      <a href="#" @click.prevent="rewind()">
        <icon name="skip" />
      </a>
      <a href="#" @click.prevent="play()"
          v-if="!isTrackPlaying">
        <icon name="play" />
      </a>
      <a href="#" @click.prevent="pause()"
         v-else>
        <icon name="pause" />
      </a>
      <a href="#" @click.prevent="forward()">
        <icon name="skip" classes="forward" />
      </a>
      <span class="time elapsed">{{elapsed}}s</span>
      <progress-bar :percent="progress" width="10rem" />
      <span class="time remaining">{{duration}}s</span>
      <span class="volume">
        <icon name="volume" />
      </span>
      <progress-bar percent="70" width="20%" />
      <span class="level">70%</span>
    </div>
    <div class="player">
      <video-player class="video-player-box"
                    ref="videoPlayer"
                    :options="playerOptions"
                    :playsinline="true"
                    @timeupdate="onTimeUpdate($event)"
                    @statechanged="playerStateChanged($event)">
      </video-player>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import { videoPlayer } from 'vue-video-player';
import Icon from '@/components/Icon.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import * as types from '@/store/types';
import '../../node_modules/video.js/dist/video-js.css';


export default {
  name: 'audio-player',
  components: {
    Icon,
    ProgressBar,
    videoPlayer,
  },
  props: ['track'],
  data() {
    return {
      currentTime: 0,
      duration: 0,
      playerOptions: {
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'audio/mp3',
        }],
      },
    };
  },
  computed: {
    ...mapGetters({
      currentTrack: types.POST,
    }),

    isTrackPlaying() {
      return this.$store.state.isTrackPlaying;
    },

    player() {
      return this.$refs.videoPlayer.player;
    },

    elapsed() {
      return this.currentTime.toFixed(2);
    },

    progress() {
      return ((this.elapsed / this.duration) * 100).toFixed(2);
    },
  },

  watch: {
    track(newTrack) {
      if (!this.player) return;

      if (!newTrack) {
        this.pause();
        return;
      }

      this.player.src({ type: 'audio/mp3', src: newTrack.attachment_url });
      this.play();
    },
  },

  methods: {
    ...mapMutations({
      setCurrentTrack: types.POST,
    }),

    onTimeUpdate() {
      this.duration = this.player.duration().toFixed(2);
    },

    play() {
      this.player.play();
      this.$store.commit('isTrackPlaying', true);
    },

    pause() {
      this.player.pause();
      this.$store.commit('isTrackPlaying', false);
    },

    seek(secs) {
      let time = this.player.currentTime() + secs;

      if (time < 0) {
        time = 0;
      }

      this.player.currentTime(time);
    },

    forward() {
      this.seek(10);
    },

    rewind() {
      this.seek(-10);
    },

    // or listen state event
    playerStateChanged(playerCurrentState) {
      if (playerCurrentState.timeupdate) {
        this.currentTime = playerCurrentState.timeupdate;
      }
    },
  },

  mounted() {
    this.player.width(10);
    this.player.height(20);
    this.play();
  },
};
</script>
<style lang="scss" scoped>
.audio-player {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background: #131314;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  flex-grow: 0;
  height: 6.7rem;
  font-size: 1.4rem;
  box-shadow: 0px -20px 30px 6px rgba(0,0,0,0.74);

  .track {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;

    .cover {
      width: 4.7rem;
      height: 4.7rem;
      background-position: center center;
      background-size: cover;
      margin-right: 1rem;
    }

    h4 {
      opacity: .6;
      text-transform: uppercase;
    }
  }

  .controls {
    display: flex;
    justify-content: flex-start;
    flex-grow: 6;
    align-items: center;
    margin-left: 5rem;

    .icon-svg {
      cursor: pointer;
    }

    .forward {
      margin-right: 5rem;
    }


    .volume {
      margin-left: 4rem;
    }
  }

  .player {
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
<style lang="scss">
.audio-player {
  .controls {
    .play, .pause {
      margin: 0 1rem;

      svg {
        width: 3rem;
      }
    }

    .forward {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  .player {
    .video-player-box {
      display: none;

      .video-js {
        .vjs-big-play-button {
          display: none;
        }
      }
    }
  }
}
</style>
