<template>
  <div class="artist">
    <div class="disc" :style="{ backgroundImage: `url(${artist.coverUrl})` }">
        <a href="#"
           class="play-button"
           @click.prevent="playArtist(artist)">
          <icon name="play" />
        </a>
    </div>
    <footer>
      <h4><router-link :to="`/artist/${artist.id}`">{{artist.name}}</router-link></h4>
      <button class="small" :class="{ following: artist.isFollow }">
        {{artist.isFollow ? 'following' : 'follow'}}
      </button>
    </footer>
  </div>
</template>
<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'artist-node',
  components: {
    Icon,
  },
  props: ['artist'],
};
</script>
<style lang="scss" scoped>
  @import './src/assets/styles/base.scss';

  .artist {
    width: 18.25rem;
    margin-left: .5rem;
    margin-bottom: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.5rem;
    background-size: cover;

    .disc {
      width: 14.75rem;
      height: 14.75rem;
      background-position: center center;
      background-size: cover;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    footer {
      margin-top: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      button.small {
        font-size: 1.2rem;
        padding: .5rem;
        margin: 10px 0px 0px;
        text-transform: uppercase;

        &.following {
          border-color: #E41C69;
          background-color: #E41C69;
        }
      }

      h4 {
        font-size: 1.2rem;
        text-transform: uppercase;

        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
</style>
