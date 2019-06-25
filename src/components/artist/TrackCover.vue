<template>
  <div
    class="track-list__item"
    style="background-image: url('../../assets/images/tracks/track.png')"
  >
    <div class="track-list__price">
      <span class="usd">$</span>
      <span class="slash">/</span>
      <span class="imu">ϑ</span>
    </div>
    <div class="track-list__play">
      <icon name="play"/>
    </div>
    <div class="track-list__title">{{track.title}}</div>
    <div class="track-list__author uppercase">
      <router-link :to="`/artist/${track.id}`">{{track.artist}}</router-link>
    </div>
  </div>
  <!-- <div class="track-list__item" :style="{ backgroundImage: `url(${track.coverUrl})` }">
    <header>
      <span class="cost">
        <span class="fiat">$47</span>
        <span class="divider">/</span>
        <span class="imu">ϑ74</span>
      </span>
      <a href="#" class="thumb-button" @click.prevent="upvote(track)">
        <icon name="thumb"/>
        <icon name="thumbHover"/>
      </a>
    </header>
    <a href="#" class="play-button" @click.prevent="playTrack(track)">
      <icon name="play"/>
    </a>
    <a href="#"
       class="pause-button"
       @click.prevent="pauseTrack()"
       v-if="isPlaying">
      <icon name="pause" />
    </a>
    <footer>
      <h3>
        <a href="#">{{track.title}}</a>
        Sample
      </h3>
      <h4>
        <router-link :to="`/artist/${track.id}`">{{track.artist}}</router-link>
      </h4>
    </footer>
  </div>-->
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import * as types from "@/store/types";
import Icon from "@/components/Icon.vue";

export default {
  name: "track-cover",
  components: {
    Icon
  },
  props: ["track"],
  data() {
    return {
      thumbImage: "thumb"
    };
  },
  computed: {
    isPlaying() {
      if (!this.currentTrack) return false;

      return (
        this.$store.state.isTrackPlaying &&
        this.currentTrack.id === this.track.id
      );
    },

    isLoggedIn() {
      return Boolean(this.token);
    },
    ...mapGetters({
      user: types.ACCOUNTS_USER,
      token: types.ACCOUNTS_TOKEN,
      currentTrack: types.POST
    })
  },
  methods: {
    ...mapActions({
      upvote: types.POST_UPVOTE,
      downvote: types.POST_DOWNVOTE,
      setCurrentTrack: types.POST
    }),

    ...mapMutations({
      toggleLogin: types.TOGGLER_LOGIN
    }),

    playTrack() {
      this.setCurrentTrack(this.track);
    },

    pauseTrack() {
      this.setCurrentTrack(null);
    },

    upvoteTrack() {
      this.upvote(this.track).then(() => {
        this.track.voted_up += 1;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
// @import './src/assets/styles/base.scss';

@import "../../assets/sass/main.scss";
// .tracks {
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-start;
//   flex-wrap: wrap;
//   margin-top: 1rem;
// }
.track-list {
  &__item {
    background-size: cover;
    height: calculateRem(180);
    width: calculateRem(180);
    display: flex;
    flex-direction: column;
    padding: calculateRem(10);
    margin-bottom: calculateRem(5);
    background-size: cover;
    box-shadow: inset 0px 35px 30px -10px #000000b3,
      inset 0px -35px 30px -5px #000000e6;
  }
  &__price {
    flex: 2;
    .slash {
      color: $pink;
    }
  }
  &__play {
    flex: 1.5;
    align-self: center;
  }
  &__title {
    flex: 0.5;
    color: $white;
  }
  &__author {
    color: $grey;
  }
}

@media (max-width: $desktop) {
  .track-list {
    &__item {
      height: calculateRem(180);
      width: calculateRem(180);
      margin-left: calculateRem(2);
      padding: calculateRem(1);
    }
    &__price {
      padding: calculateRem(5);
    }
    &__play {
      padding: calculateRem(5);
    }
    &__title {
      padding: calculateRem(5);
    }
    &__author {
      padding: calculateRem(5);
    }
  }
}

// .track {
//   width: 21rem;
//   height: 21rem;
//   margin-left: .5rem;
//   margin-bottom: .5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: flex-start;
//   padding: 0.7rem;
//   background-position: center center;
//   background-size: cover;
//   box-shadow: inset 0px 35px 30px -10px #000000b3, inset 0px -35px 30px -5px #000000e6;

//   .play-button {
//     align-self: center;
//   }

//   .thumb-button {
//     .icon-svg.thumb {
//       display: inline-block;
//     }

//     .icon-svg.thumbHover {
//       display: none;
//     }

//     &:hover {
//       .icon-svg.thumb {
//         display: none;
//       }

//       .icon-svg.thumbHover {
//         display: inline-block;
//       }
//     }
//   }

//   header {
//     display: flex;
//     justify-content: space-between;
//     flex-direction: row;
//     width: 100%;
//     font-size: 1.4rem;
//     font-weight: 700;

//     .cost {
//       display: flex;
//       align-items: center;
//       justify-content: flex-start;
//     }

//     .divider {
//       color: #E41C69;
//       margin: 0 .25rem;
//     }
//   }

//   footer {
//     h3 {
//       font-size: 1.4rem;
//       font-weight: 400;

//       a {
//         color: #fff;
//         text-decoration: none;
//       }
//     }

//     h4 {
//       font-size: 1.4rem;
//       opacity: .6;
//       text-transform: uppercase;

//       a {
//         color: #fff;
//         text-decoration: none;
//       }
//     }
//   }
// }
</style>
