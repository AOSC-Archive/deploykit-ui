<script>
export default {
  props: {
    left: Boolean,
  },
};
</script>

<template>
  <button class="button" :class="left ? 'button-left' : 'button-right'">
    <slot />
  </button>
</template>

<style scoped>
.button {
  appearance: none;
  border: 0;
  cursor: pointer;

  background: var(--dk-button-color);
  color: #fff;
  font-size: 16px;
  font-weight: 500;

  align-items: center;
  display: flex;
  justify-content: center;

  /* Used to position the triangle */
  position: relative;

  /* Size */
  height: var(--dk-button-height);

  /* Spacing */
  padding: 0.25rem 0.5rem;
}

.button:hover {
  background: #dddddd56;
}

.button-left::before {
  content: "";

  border-color: transparent var(--dk-button-color) transparent transparent;
  border-style: solid;
  border-width: calc(var(--dk-button-height) / 2)
    calc(var(--dk-button-height) / 2) calc(var(--dk-button-height) / 2) 0rem;

  /* Position */
  left: 0px;
  position: absolute;
  top: 0px;
  transform: translate(-100%, 0px);
}

.button-right::after {
  content: "";

  border-color: transparent transparent transparent var(--dk-button-color);
  border-style: solid;
  border-width: calc(var(--dk-button-height) / 2) 0rem
    calc(var(--dk-button-height) / 2) calc(var(--dk-button-height) / 2);

  /* Position */
  right: 0px;
  position: absolute;
  top: 0px;
  transform: translate(100%, 0px);
}
</style>
