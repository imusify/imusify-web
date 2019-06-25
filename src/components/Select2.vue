<template>
  <select :name="name">
    <slot></slot>
  </select>
</template>

<script>
import Vue from "vue";
import $ from "jquery";
import * as select2 from "select2";
export default {
  data() {
    return {
      items: []
    };
  },
  props: ["name", "options", "value", "multiple"],
  mounted() {
    this.formatOptions();
    let vm = this;
    let select = $(this.$el);
    select
      .select2({
        placeholder: "Select",
        width: "100%",
        allowClear: true,
        data: this.items
      })
      .on("change", function() {
        vm.$emit("input", select.val());
      });
    select.val(this.value).trigger("change");
  },
  methods: {
    formatOptions() {
      this.items.push({ id: "", text: "" });
      for (let key in this.options) {
        this.items.push({ id: key, text: this.options[key] });
      }
    }
  },
  destroyed: function() {
    $(this.$el)
      .off()
      .select2("destroy");
  }
};
</script>
<style lang="scss" scoped>
.select2-hidden-accessible {
  display: none;
}
</style>