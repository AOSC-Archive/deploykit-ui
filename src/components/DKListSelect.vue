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
      <div class="button-box">
        <h2 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.3rem">
          {{ option.title }}
        </h2>
        <p
          style="font-size: 0.88rem; line-height: 1.2"
          :class="option.hl ? 'error-msg' : ''"
        >
          {{ option.body }}
        </p>
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

button[disabled].button:hover {
  background: transparent;
}

.list-container button {
  height: unset;
  line-height: 1.2rem;
  background-color: transparent;
  width: 100%;
  align-content: flex-start;
}

.button-box {
  text-align: left;
  margin: 0.5rem 0.5rem 0 0.5rem;
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
