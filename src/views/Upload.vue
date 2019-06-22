<template>
  <section id="upload">
    <artworkProgress></artworkProgress>
    <div class="body">
      <artwork></artwork>
      <upload-form></upload-form>
    </div>
  </section>
</template>
<script>
import Artwork from '@/components/upload/Artwork.vue';
import ArtworkProgress from '@/components/upload/Progress.vue';
import UploadForm from '@/components/upload/Form.vue';

export default {
  components: {
    Artwork,
    ArtworkProgress,
    UploadForm,
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/main.scss";
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  height: 100vh;
  width: 40vw;
  .body {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: "artwork form";
    margin-top: calculateRem(30);
  }
}
</style>
