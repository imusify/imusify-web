<template>
  <div class="audio-player" v-if="track">
    <div class="track">
      <div class="cover"
           :style="{ backgroundImage: `url(${track.coverUrl})` }"></div>
      <aside>
        <h3>{{track.title}}</h3>
        <h4>{{track.artist}}</h4>
      </aside>
    </div>
    <div class="controls">
      <icon name="skip" />
      <icon name="play" />
      <icon name="skip" classes="forward" />
      <span class="time elapsed">0:47</span>
      <progress-bar percent="20" width="45%" />
      <span class="time remaining">4:27</span>
      <span class="volume">
        <icon name="volume" />
      </span>
      <progress-bar percent="70" width="20%" />
      <span class="level">70%</span>
    </div>
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
