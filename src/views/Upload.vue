<template>
  <section id="upload">
    <div
      id="dropzone"
      class="modal dropzone"
      style="visibility: hidden; opacity: 0; display: flex; justify-content: center; align-items: center;"
    >
      <div id="textnode">Drop audio file.</div>
    </div>
    <artworkProgress :progress="progress" @handleAudioFile="handleAudioFile"></artworkProgress>
    <div class="body">
      <artwork @setArtwork="setArtwork" :attributes="audioAttributes"></artwork>
      <upload-form
        :categories="categories"
        :subCategories="subCategories"
        :attributes="audioAttributes"
        :progress="progress"
        @getSubCategory="getSubCategory"
        @saveTrack="saveTrack"
      ></upload-form>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import * as types from "@/store/types";
import { progressUpload } from "../store/api/create-api";
import Artwork from "@/components/upload/Artwork.vue";
import ArtworkProgress from "@/components/upload/Progress.vue";
import UploadForm from "@/components/upload/Form.vue";

import * as jsmediatags from "jsmediatags";

export default {
  components: {
    Artwork,
    ArtworkProgress,
    UploadForm
  },
  data() {
    return {
      audioFile: null,
      subCategories: [],
      progress: 0,
      audioAttributes: {
        title: "",
        tags: "",
        genre: [],
        subgenre: "",
        description: "",
        artwork: {
          file: null,
          preview: ""
        }
      }
    };
  },
  created() {
    this.getCategories();
  },
  computed: {
    ...mapGetters({
      categories: types.POSTS_CATEGORIES,
      uploadedData: types.GET_UPLOAD_DATA
    }),
  },
  methods: {
    ...mapActions({
      getCategories: types.POSTS_CATEGORIES,
      getUploadURL: types.GET_UPLOAD_URL,
      uploadAudioFile: types.UPLOAD_AUDIO_FILE,
      createPost: types.POST_CREATE
    }),
    async handleAudioFile(file) {
      // @todo ensure file to be upload is an audio mp3 file
      if (typeof file !== "undefined") {
        await this.getUploadURL(file);
        await progressUpload(this.uploadedData.url, file, onUploadProgress => {
          const totalLength = onUploadProgress.lengthComputable
            ? onUploadProgress.total
            : onUploadProgress.target.getResponseHeader("content-length") ||
              onUploadProgress.target.getResponseHeader(
                "x-decompressed-content-length"
              );
          if (totalLength !== null) {
            this.progress = Math.round(
              (onUploadProgress.loaded * 100) / totalLength
            );
          }
        });
        await jsmediatags.read(file, {
          onSuccess: async tag => {
            if (typeof tag.tags !== "undefined") {
              this.audioAttributes = {
                title: tag.tags.title,
                tags: "",
                genre: tag.tags.album,
                subgenre: "",
                description: "",
                artwork: {
                  file: "",
                  preview: ""
                }
              };
            } else {
              // Notify user to fill the form
            }
          },
          onError: error => {
            console.log("Error ", error);
          }
        });
      }
    },
    getSubCategory(category) {
      this.subCategories = this.categories.find(
        index => index.id === category
      ).children;
    },
    setArtwork(artwork) {
      const {
        title,
        tags,
        genre,
        subgenre,
        description
      } = this.audioAttributes;
      this.audioAttributes = {
        title: title,
        tags: tags,
        genre: genre,
        subgenre: subgenre,
        description: description,
        artwork: {
          file: artwork.file,
          preview: artwork.preview
        }
      };
    },
    async saveTrack() {
      let data = {
        title: this.audioAttributes.title,
        description: this.audioAttributes.description,
        categories: this.audioAttributes.genre,
        attachment: this.uploadedData.url,
        channel: 63 // For now
      };
      await this.createPost(data);
    }
  },
  mounted() {
    let self = this;
    window.addEventListener("dragenter", function(e) {
      e.preventDefault();
      document.querySelector("#dropzone").style.visibility = "";
      document.querySelector("#dropzone").style.opacity = 1;
      document.querySelector("#textnode").style.fontSize = "48px";
    });

    window.addEventListener("dragleave", function(e) {
      e.preventDefault();

      document.querySelector("#dropzone").style.visibility = "hidden";
      document.querySelector("#dropzone").style.opacity = 0;
      document.querySelector("#textnode").style.fontSize = "42px";
    });

    window.addEventListener("dragover", function(e) {
      e.preventDefault();
      document.querySelector("#dropzone").style.visibility = "";
      document.querySelector("#dropzone").style.opacity = 1;
      document.querySelector("#textnode").style.fontSize = "48px";
    });

    window.addEventListener("drop", function(e) {
      e.preventDefault();
      document.querySelector("#dropzone").style.visibility = "hidden";
      document.querySelector("#dropzone").style.opacity = 0;
      document.querySelector("#textnode").style.fontSize = "42px";

      let files = e.dataTransfer.files;
      if (files.length > 1) {
        // trigger warning message here
        console.log("You can only upload one audio content at time.");
      }
      console.log("Drop files:", files);
      //this.uploadFile(files);
      self.handleAudioFile(files[0]);
    });
  }
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
