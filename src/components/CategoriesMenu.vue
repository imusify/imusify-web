<template>
  <nav class="topnav">
    <section class="categories">
      <a href="#" class="prev">
        <icon name="prev" />
      </a>
      <ul>
        <li v-for="(category, index) in categories" :key="index"
            :class="{ active: category == 'Electronic' }">
          <a href="#">{{category}}</a>
        </li>
      </ul>
      <a href="#" class="next">
        <icon name="next" />
      </a>
    </section>
    <section class="tags">
      <a href="#" class="prev">
        <icon name="prev" />
      </a>
      <ul>
        <li v-for="(tag, index) in tags.Electronic" :key="index"><a href="#">{{tag}}</a></li>
      </ul>
      <a href="#" class="next">
        <icon name="next" />
      </a>
    </section>
  </nav>
</template>
<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'categories-menu',
  components: {
    Icon,
  },
  data() {
    return {
      categories: [
        'All Genres',
        'Blues',
        'Country',
        'Electronic',
        'Hip Hop',
        'Jazz',
        'Pop',
        'R&B and Soul',
        'Rock',
      ],
      tags: {
        Electronic: [
          'Ambient',
          'Breakbeat',
          'Disco',
          'Downtempo',
          'Drum and Bass',
          'Electro',
          'Hardcore',
          'House',
          'IDM',
          'Techno',
          'Trance',
        ],

      },
    };
  },
};
</script>
<style lang="scss" scoped>
  .topnav {
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
    position: sticky;
    top: 0;
    z-index: 1;

    > section {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    ul a {
      color: #737373;
      text-decoration: none;
      display: block;
      white-space: nowrap;
      text-transform: uppercase;
      padding: 2rem 1.7rem;
      border-bottom: 2px solid transparent;

      &:hover {
        color: #fff;
        border-bottom: 2px solid #E41C69;
      }
    }

    .active {
      a {
        color: #fff;
        border-bottom: 2px solid #E41C69;
      }
    }

    .categories {
      background-color: #131314;
    }

    .tags {
      background-color: #000;
    }

    .categories, .tags {
      padding-left: 2.5rem;

      ul {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        overflow-x: hidden;
        width: 100vw;

        li {
          display: block;
        }
      }
    }

    a.prev {
      transform: rotate(180deg);
    }
  }

  @media (min-width: 480px) {
    .categories, .tags {
      width: calc(100vw - 19rem);
    }
  }

  @media (min-width: 1200px) {
    a.prev, a.next {
      display: none !important;
    }
  }
</style>
