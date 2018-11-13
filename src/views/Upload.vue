<template>
  <section id="upload">
    <header>
      <upload-track></upload-track>
    </header>
    <div class="body">
      <upload-album-cover></upload-album-cover>
      <upload-form></upload-form>
    </div>
  </section>
</template>
<script>
import UploadTrack from '@/components/upload/Track.vue';
import UploadAlbumCover from '@/components/upload/AlbumCover.vue';
import UploadForm from '@/components/upload/Form.vue';

export default {
  components: {
    UploadTrack,
    UploadAlbumCover,
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
