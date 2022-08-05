<script setup></script>

<template>
  <div class="logo-container">
    <img
      style="align-self: center"
      alt="AOSC logo"
      class="logo"
      src="@/assets/aosc-logo-core.svg"
      width="32"
      height="32"
    />
    <div style="line-height: 1">
      <span style="font-size: 0.82rem">{{ $t("logo-p1") }}</span>
      <h2 style="font-size: 1.25rem">{{ $t("logo-p2") }}</h2>
    </div>
  </div>
</template>

<style scoped>
.logo {
  margin: 0 0.5rem 0 0;
}

.logo-container {
  display: flex;
  line-height: 1.5;
  margin-left: 1.7rem;
}
</style>
