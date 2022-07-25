<script>
export default {
  props: {
    selected: String,
    options: Array,
  },
  data: function () {
    return {
      user_input: "",
      locked_in: null,
      show_dropdown: false,
    };
  },
  computed: {
    filtered_options: function () {
      const current_input = this.user_input.trim().toLowerCase();
      if (!current_input) return this.options;
      return this.options.filter(
        (v) =>
          v.text.toLowerCase().includes(current_input) ||
          v.data.toLowerCase().includes(current_input)
      );
    },
  },
  methods: {
    lock_selection: function (index) {
      const selected = this.filtered_options[index];
      this.show_dropdown = false;
      this.user_input = selected.text;
      this.$emit("update:selected", index);
    },
    edit_selection: function () {
      this.show_dropdown = true;
    },
  },
};
</script>

<template>
  <div class="dropdown-content">
    <div class="select">
      <input
        name="search-box"
        type="text"
        v-model="user_input"
        :style="show_dropdown ? '' : 'text-align: center'"
        placeholder="Start typing to search..."
        @focus="edit_selection"
      />
    </div>
    <div class="dropdown-gutter" v-if="show_dropdown">
      <a
        v-for="(opt, index) in filtered_options"
        v-bind:key="opt.text"
        @click="lock_selection(index)"
        @keyup.enter="lock_selection(index)"
        tabindex="0"
        >{{ opt.text }}</a
      >
    </div>
  </div>
</template>

<style scoped>
div.select::after {
  margin-top: -1.2em;
}

.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  color: #1f1f1f;
  display: block;
  text-align: left;
  line-height: 1;
}

.dropdown-content a:hover {
  background: #80a9ff;
}

.dropdown-content input {
  width: 100%;
}

.dropdown-gutter {
  background-color: #f6f6f6;
  position: absolute;
  left: 0;
  width: 100%;
}

.dropdown-content {
  /* background-color: #f6f6f6; */
  width: 100%;
  min-width: 230px;
  /* border: 1px solid #ddd; */
  z-index: 10;
}
</style>
