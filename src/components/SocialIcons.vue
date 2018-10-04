<template>
  <div class="social-icons">
    <a href="#">
      <icon name="facebook"/>
    </a>
    <a href="#">
      <icon name="linkedin"/>
    </a>
    <a href="#">
      <icon name="soundcloud"/>
    </a>
  </div>
</template>
<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'social-icons',
  components: {
    Icon,
  },
};
</script>
<style lang="scss" scoped>
  .social-icons {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 3.8rem 0;

    a {
      color: #fff;
      width: 5rem;
      height: 5rem;
      border-radius: 50rem;
      border: 0.1rem solid #747475;
      margin: 0 1.1rem;
      font-size: 2.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      background: #0d0d0e;
      transition: all .3s ease-in-out;

      &:hover {
        border-color: #fff;
      }
    }
  }
</style>
