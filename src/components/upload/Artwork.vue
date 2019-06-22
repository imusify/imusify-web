<template>
  <div class="track-artwork">
    <p>Album artwork</p>
    <div class="track-cta">
      <img
        :src="attributes.artwork"
        @click="$refs.file.click()"
        alt="imusify Song Album Artwork"
        v-if="attributes.artwork"
      >
      <img
        src="../../assets/images/icons/artwork-placeholder.png"
        alt="imusify Album Artwork"
        v-else
        @click="$refs.file.click()"
      >
      <button class="btn btn-grey uppercase" @click="$refs.file.click()">
        <icon name="upload"/>Album Artwork
      </button>
    </div>
    <input type="file" @change="handleFileArtwork" ref="file">
  </div>
</template>
<script>
import Icon from "@/components/Icon.vue";

export default {
  name: "track-artwork",
  props: ["attributes"],
  date() {
    return {
      file: null
    };
  },
  components: {
    Icon
  },
  methods: {
    handleFileArtwork(e) {
      console.log(e.target.files[0]);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/main.scss";

.track-artwork {
  grid-area: artwork;
  display: grid;
  grid-template-rows: 0fr 1fr 0fr;
  p {
    color: $grey;
    font-size: calculateRem(20);
  }
  .track-cta {
    img {
      height: calculateRem(250);
      background-size: cover;
      cursor: pointer;
      width: calculateRem(250);
    }
    button {
      font-size: calculateRem(22);
      margin-top: calculateRem(15);
    }
  }
  input[type="file"] {
    display: none;
  }
}
</style>
