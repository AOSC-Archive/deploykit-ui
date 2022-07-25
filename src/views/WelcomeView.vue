<script setup>
import DKBottomSteps from "../components/DKBottomSteps.vue";
</script>

<template>
  <div>
    <h1>Welcome</h1>
    <p>In the following pages, Installer will guide you through...</p>
    <ul>
      <li>Variant selection</li>
      <li>Disk partitioning</li>
      <li>System configuration</li>
    </ul>
    <p>
      The installation process should only take a few minutes, but will require
      more time on slower hardware.
    </p>
  </div>
  <DKBottomSteps no_previous="1" />
</template>
