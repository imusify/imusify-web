<template>
  <div class="audio-player">
    <div class="track">
      <!--<div class="cover"-->
           <!--:style="{ backgroundImage: `url(${track.coverUrl})` }"></div>-->
      <aside>
        <h3>{{track.title}}</h3>
        <h4>{{track.artist}}</h4>
      </aside>
    </div>
    <div class="controls">
      <a href="#" @click.prevent="rewind()">
        <icon name="skip" />
      </a>
      <a href="#" @click.prevent="play()"
          v-if="!isPlaying">
        <icon name="play" />
      </a>
      <a href="#" @click.prevent="pause()"
         v-else>
        <icon name="pause" />
      </a>
      <a href="#" @click.prevent="forward()">
        <icon name="skip" classes="forward" />
      </a>
      <span class="time elapsed"></span>
      <progress-bar percent="20" width="" />
      <span class="time remaining"></span>
      <span class="volume">
        <icon name="volume" />
      </span>
      <progress-bar percent="70" width="20%" />
      <span class="level">70%</span>
    </div>
    <div id="player" ref="player"></div>
  </div>
</template>
<script>
import Icon from '@/components/Icon.vue';
import ProgressBar from '@/components/ProgressBar.vue';


export default {
  name: 'audio-player',
  components: {
    Icon,
    ProgressBar,
  },
  props: ['track'],
  data() {
    return {
      isPlaying: false,
    };
  },
  computed: {
    player() {
      return window.jwplayer(this.$refs.player);
    },

    length() {
      return this.player.getDuration && this.player.getDuration();
    },

    elapsed() {
      return this.player.getPosition && this.player.getPosition();
    },

    progress() {
      return `${(this.length / this.elapsed) * 100}%`;
    },
  },

  watch: {
    track(newTrack) {
      if (!this.player.setup || !newTrack) return;

      this.setup(newTrack);
    },
  },

  methods: {
    setup(track) {
      if (!this.player) return;

      this.player.setup({
        file: track.attachment_url,
        title: track.title,
        height: 40,
        width: '10%',
      });

      this.play();
    },

    play() {
      this.player.play();
      this.isPlaying = true;
    },

    pause() {
      this.player.pause();
      this.isPlaying = false;
    },

    seek(secs) {
      let time = this.player.getPosition() + secs;

      if (time < 0) {
        time = 0;
      }

      this.player.seek(time);
    },

    forward() {
      this.seek(10);
    },

    rewind() {
      this.seek(-10);
    },

    loadPlayer() {
      const script = document.createElement('script');

      script.onload = () => {
        window.jwplayer.key = 'gqWMKSJFrSCFPcg4SHSHTFbVSyeE6Iz69Q/8BTvTyNk=';
        this.setup(this.track);
      };

      script.src = '//d1t85561ay7mwz.cloudfront.net/jwplayer.js';
      document.head.appendChild(script);
    },
  },

  mounted() {
    this.loadPlayer();
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
}
</style>
<style lang="scss">
.audio-player {
  .controls {
    .play {
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
}
</style>
