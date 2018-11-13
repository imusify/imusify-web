<template>
  <form id="upload-track">
    <div class="form-field">
      <label>
        Title

        <input type="text" v-model="track.title" />
      </label>
    </div>
  </form>
</template>
<script>
export default {
  name: 'upload-form',
  data() {
    return {
      track: {
        title: '',
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
