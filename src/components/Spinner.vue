<template>
  <icon name="spinner" />
</template>
<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'spinner',
  components: {
    Icon,
  },
};
</script>
<style lang="scss">
  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(calc(50% - 10rem), calc(50% - 12.2rem/2));
  }

  @media (min-width: 480px) {
    .spinner {
      left: calc(19rem + 50%);
      transform: translate(calc(50% - 19rem), calc(50% - 12.2rem/2));
    }
  }
</style>
