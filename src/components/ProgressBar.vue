<template>
  <span class="progress" :style="{ width }">
    <span class="elapsed" :style="{ width: completed }"></span>
    <span class="remainder" :style="{ width: remainder }"></span>
  </span>
</template>
<script>
export default {
  name: 'progress-bar',
  props: ['percent', 'width'],
  computed: {
    completed() {
      return `${this.percent}%`;
    },
    remainder() {
      return `${100 - this.percent}%`;
    },
  },
};
</script>
<style lang="scss" scoped>
.progress {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0 1rem;

  .elapsed {
    display: inline-block;
    height: .5rem;
    background: #E41C69;
  }

  .remainder {
    display: inline-block;
    height: .5rem;
    background: #000;
  }
}
</style>
