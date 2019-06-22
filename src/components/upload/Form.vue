<template>
  <form id="upload-track">
    <div class="form-field">
      <label>Title</label>
      <input type="text" v-model="track.title" placeholder="Title comes here">
    </div>
    <div class="form-field">
      <label>Tags</label>
      <input
        type="text"
        v-model="track.title"
        placeholder="Please enter tags and separate using commas"
      >
    </div>
    <div class="form-field">
      <label>Genre</label>
      <input type="text" v-model="track.title" placeholder="Please select genre">
    </div>
    <div class="form-field">
      <label>Subgenre</label>
      <input type="text" v-model="track.title" placeholder="Please select subgenre">
    </div>
    <div class="form-field">
      <label>Description</label>
      <textarea v-model="track.title">
        Description comes here
      </textarea>
    </div>
    <button class="btn btn-primary uppercase">Save Track</button>
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
@import "../../assets/sass/main.scss";
form {
  grid-area: "form";
  margin-left: calculateRem(20);
}
label {
  color: $grey;
  font-size: calculateRem(18);
  margin-bottom: calculateRem(10);
}
button {
  margin-top: calculateRem(40);
}
.form-field {
  display: flex;
  flex-direction: column;
}
</style>
