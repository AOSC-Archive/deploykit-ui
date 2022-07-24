<script setup>
import DKBottomSteps from "../components/DKBottomSteps.vue";
</script>

<template>
  <div>
    <h1>Hostname</h1>
    <p>
      Please input your desired hostname. This is otherwise known as a device
      name used for identification. Your hostname may only consist letters a-z,
      numbers 0-9, and dashes ("-").
    </p>
    <form class="form-layout">
      <div>Hostname</div>
      <input />
    </form>
    <p class="error-msg"></p>
  </div>
  <DKBottomSteps />
</template>

<style scoped>
.error-msg {
  color: var(--dk-accent);
}
</style>
