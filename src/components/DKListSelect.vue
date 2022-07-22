<script>
export default {
  props: {
    options: Array,
  },
  data: function () {
    return {
      selected: null,
    };
  },
  methods: {
    select: function (index) {
      this.selected = index;
    },
  },
};
</script>

<template>
  <div class="list-container">
    <button
      v-for="(option, index) in options"
      v-bind:key="option.title"
      :class="(index === selected ? 'selected ' : ' ') + 'button'"
      :disabled="option.disabled"
      @click="select(index)"
      @keyup.enter="select(index)"
      @keyup.space="select(index)"
    >
      <div style="text-align: left; margin: 0.5rem 0.5rem 0 0.5rem">
        <h2>{{ option.title }}</h2>
        <p :class="option.hl ? 'error-msg' : ''">{{ option.body }}</p>
      </div>
    </button>
  </div>
</template>

<style scoped>
button.button.selected {
  background-color: var(--dk-button-color);
}

.button:hover {
  background: #dddddd56;
}

.list-container button {
  height: unset;
  line-height: 1.2rem;
  background-color: transparent;
}

button:disabled,
button[disabled] {
  color: #8f8f8f;
  cursor: not-allowed;
}

.error-msg {
  color: var(--dk-accent);
}
</style>
