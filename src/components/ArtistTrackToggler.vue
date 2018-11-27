<template>
  <div class="toggler">
    <router-link to="/"
                 class="button"
                :class="{ active: selected === 'tracks' }">Tracks</router-link>
    <router-link to="/artists"
                 class="button"
                 :class="{ active: selected === 'artists' }">Artists</router-link>
  </div>
</template>
<script>
export default {
  name: 'artist-track-toggler',
  props: ['selected'],
};
</script>
<style lang="scss" scoped>
  .toggler {
    position: sticky;
    bottom: 10rem;
    left: 50%;
    right: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 0;
    transform: translateX(calc(50% - 19rem));
    background: #000;
    border: 1px solid #2a2a2a;
    border-radius: 50rem;
    padding: .5rem;
    width: 23rem;

    .button {
      border-radius: 50rem;
      border-color: #000;
      background-color: #000;
      color: #9F9F9F;

      &:hover {
        color: #fff;
      }

      &.active {
        color: #fff;
        background-color: #E41C69;
      }
    }
  }

  @media (min-width: 480px) {
    .toggler {
      left: calc(19rem + 50% - 23rem/2);
    }
  }

  @media (max-width: 768px) {
    .toggler {
      bottom: 15rem;
    }
  }
</style>
