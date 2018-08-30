<template>
  <section class="home">
    <categories-menu></categories-menu>
  </section>
</template>

<script>
// @ is an alias to /src
import CategoriesMenu from '@/components/CategoriesMenu.vue';

export default {
  name: 'home',
  components: {
    CategoriesMenu,
  },
};
</script>
