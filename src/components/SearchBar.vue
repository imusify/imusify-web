<template>
  <form class="search-bar"
        @submit.prevent="search()">
    <input type="text"
           placeholder="What are you looking for?"
           v-model="filter" />
    <button>
      <icon name="magnify" />
    </button>
  </form>
</template>
<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'search-bar',
  components: {
    Icon,
  },

  data() {
    return {
      filter: '',
    };
  },

  methods: {
    search() {
      console.log('do search');
    },
  },
};
</script>
<style lang="scss" scoped>
  .search-bar {
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    justify-content: flex-end;
    align-items: center;

    input {
      margin: 1rem;
      background: transparent;
      color: #fff;
      font-size: 1.6rem;
      width: 26rem;
      opacity: .6;

      &::placeholder {
        color: #737373;
        text-transform: uppercase;
      }
    }

    button {
      border: none;
      background: transparent;
      padding: 0;
    }
  }

  @media (min-width: 1400px) {
    .search-bar {
      display: flex;
    }
  }
</style>
