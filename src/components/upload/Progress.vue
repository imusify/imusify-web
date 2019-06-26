<template>
  <div class="upload-progress" @click="$refs.audioFile.click()">
    <img src="../../assets/images/icons/upload-icon.png" alt="imusify Progress Upload">
    <div class="upload-progress__text">
      <h4 class="uppercase">Upload Your Track</h4>
      <span ref="dom-element">Drag and drop or click here to start the upload</span>
    </div>
    <span v-if="progress > 0 && progress < 100" class="progress-status">{{progress}}% uploaded</span>
    <input type="file" @change="handleAudioFileUpload" ref="audioFile">
    <div
      v-if="progress > 0 && progress < 100"
      :style="{width: `${progress}%`}"
      aria-valuemin="0"
      :aria-valuenow="progress"
      aria-valuemax="100"
      class="progress-meter"
    ></div>
  </div>
</template>
<script>
import Icon from "@/components/Icon.vue";

export default {
  name: "artworkProgress",
  props: ["progress"],
  data() {
    return {
      audioFile: null
    };
  },
  components: {
    Icon
  },
  methods: {
    async handleAudioFileUpload(e) {
      e.preventDefault();
      await this.$emit("handleAudioFile", e.target.files[0]);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/main.scss";

.upload-progress {
  height: calculateRem(160);
  background: $background !important;
  border: 1px dashed $grey;
  border-radius: calculateRem(3);
  padding: calculateRem(20);
  display: flex;
  cursor: pointer;
  img {
    width: calculateRem(120);
    height: calculateRem(120);
  }
  &__text {
    flex: 1;
    align-self: center;
    margin-left: calculateRem(30);
    h4 {
      margin-bottom: calculateRem(10);
    }
    span {
      color: $grey;
      font-size: calculateRem(18);
    }
  }

  .progress-status {
    font-size: calculateRem(20);
    align-self: center;
    justify-self: center;
    z-index: 100;
  }

  .progress-meter {
    background: $pink;
    z-index: 99;
    position: absolute;
    height: calculateRem(120);
    max-width: 38vw;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
}
</style>
