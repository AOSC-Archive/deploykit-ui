<script setup></script>

<template>
  <div class="bottom-bar"><slot /></div>
</template>

<style scoped>
.bottom-bar {
  display: flex;
  column-gap: 0.5rem;
  position: absolute;
  bottom: 0;
  margin-bottom: 1rem;
  width: 100%;
}
</style>
