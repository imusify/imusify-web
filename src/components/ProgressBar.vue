<template>
  <span class="progress"
        :style="{ width }"
        @click.prevent="onClickProgress($event)">
    <span class="elapsed" :style="{ width: completed }" ref="elapsed"></span>
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
  methods: {
    onClickProgress($event) {
      // calculate where on progress bar click happened
      const width = $event.currentTarget.clientWidth;
      const offsetX = ($event.offsetX + $event.target.offsetLeft) - $event.currentTarget.offsetLeft;
      const percent = Math.round((offsetX / width) * 100);

      this.$emit('onClickProgress', { percent });
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
  cursor: pointer;

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
