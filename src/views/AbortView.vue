<script setup>
import DKBottomActions from "@/components/DKBottomActions.vue";
</script>

<template>
  <div>
    <h1>Abort?</h1>
    <p>
      Do you really want to abort installation? Doing so will result in an
      <strong>incomplete or corrupted</strong> AOSC OS installation in the
      target partition you specified.
    </p>
    <p>
      Would you like to save your current installation configuration? When you
      return, by selecting the original installation partition, installer will
      restart based on your previous configuration.
    </p>
  </div>
  <DKBottomActions>
    <button class="button" @click="$router.back()">Resume</button>
    <button class="button">Quit & Save Configuration</button>
    <button class="button">Quit</button>
  </DKBottomActions>
</template>
