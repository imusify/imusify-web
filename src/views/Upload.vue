<template>
  <section id="upload">
    <header>
      <upload-track></upload-track>
    </header>
    <div class="body">
      <upload-album></upload-album>
      <upload-form></upload-form>
    </div>
  </section>
</template>
<script>
import UploadTrack from '@/components/upload/Track.vue';
import UploadAlbum from '@/components/upload/Album.vue';
import UploadForm from '@/components/upload/Form.vue';

export default {
  components: {
    UploadTrack,
    UploadAlbum,
    UploadForm,
  },
};
</script>
<style lang="scss" scoped>
  #upload {
    .body {
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
    }
  }
</style>
