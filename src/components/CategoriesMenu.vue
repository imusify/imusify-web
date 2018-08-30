<template>
  <nav class="topnav">
    <section class="categories">
      <a href="#" class="prev">
        <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3.25L3.17928 0L15.6 13L3.17928 26L0 22.75L9.36 13L0 3.25Z" fill="white"/>
        </svg>
      </a>
      <ul>
        <li v-for="(category, index) in categories" :key="index"
            :class="{ active: category == 'Electronic' }">
          <a href="#">{{category}}</a>
        </li>
      </ul>
      <a href="#" class="next">
        <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3.25L3.17928 0L15.6 13L3.17928 26L0 22.75L9.36 13L0 3.25Z" fill="white"/>
        </svg>
      </a>
    </section>
    <section class="tags">
      <a href="#" class="prev">
        <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3.25L3.17928 0L15.6 13L3.17928 26L0 22.75L9.36 13L0 3.25Z" fill="white"/>
        </svg>
      </a>
      <ul>
        <li v-for="(tag, index) in tags.Electronic" :key="index"><a href="#">{{tag}}</a></li>
      </ul>
      <a href="#" class="next">
        <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3.25L3.17928 0L15.6 13L3.17928 26L0 22.75L9.36 13L0 3.25Z" fill="white"/>
        </svg>
      </a>
    </section>
  </nav>
</template>
<script>
export default {
  name: 'categories-menu',
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
      padding: 2rem 1rem;
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

    .prev {
      transform: rotate(180deg);
    }

    .prev, .next {
      display: block;
      margin: 0 1rem;
      &:hover {
        svg path {
          fill: #E41C69;
        }
      }
    }
  }

  @media (min-width: 480px) {
    .categories, .tags {
      width: calc(100vw - 19rem);
    }
  }

  @media (min-width: 1200px) {
    .prev, .next {
      display: none !important;
    }
  }
</style>
