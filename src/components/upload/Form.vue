<template>
  <form id="upload-track">
    <div class="form-field">
      <label>Title</label>
      <input
        type="text"
        v-model="attributes.title"
        :disabled="isDisabled"
        placeholder="Title comes here"
      >
    </div>
    <div class="form-field">
      <label>Tags</label>
      <input
        type="text"
        v-model="attributes.tags"
        placeholder="Please enter tags and separate using commas"
        :disabled="isDisabled"
      >
    </div>
    <div class="form-field">
      <label>Genre</label>
      <select v-model="attributes.genre" :disabled="isDisabled" multiple>
        <option :value="item.id" v-for="(item, index) in categories" :key="index">{{item.name}}</option>
      </select>
    </div>
    <!-- <div class="form-field">
      <label>Subgenre</label>
      <select v-model="attributes.subgenre" :disabled="isDisabled">
        <option :value="item.id" v-for="(item, index) in subCategories" :key="index">{{item.name}}</option>
      </select>
    </div> -->
    <div class="form-field">
      <label>Description</label>
      <textarea
        v-model="attributes.description"
        placeholder="Description comes here"
        :disabled="isDisabled"
      ></textarea>
    </div>
    <button class="btn btn-primary uppercase" :disabled="isDisabled" @click="saveTrack">Save Track</button>
  </form>
</template>
<script>
import Select2 from "@/components/Select2.vue";
export default {
  name: "upload-form",
  props: ["attributes", "categories", "subCategories", "progress"],
  components: {
    Select2
  },
  methods: {
    getSubCategory: async function(e) {
      e.preventDefault();
      await this.$emit("getSubCategory", this.attributes.genre);
    },
    saveTrack: async function(e) {
      e.preventDefault();
      await this.$emit("saveTrack");
    }
  },
  computed: {
    isDisabled() {
      return this.progress == 100 ? false : true;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/main.scss";
form {
  grid-area: "form";
  margin-left: calculateRem(20);
}
label {
  color: $grey;
  font-size: calculateRem(18);
  margin-bottom: calculateRem(10);

  span {
    .select2-container--default {
      display: none !important;
    }
  }
}
button {
  margin-top: calculateRem(40);
}
.form-field {
  display: flex;
  flex-direction: column;
}
</style>
