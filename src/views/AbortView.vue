<script setup>
import DKBottomActions from "@/components/DKBottomActions.vue";
import DKStripButton from "@/components/DKStripButton.vue";
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
    <DKStripButton omit_bline="1" text="Resume" @click="$router.back()">
      <img src="@/assets/resume.svg" height="36" />
    </DKStripButton>
    <DKStripButton omit_bline="1" text="Save Configuration & Quit">
      <img src="@/assets/document-save.svg" height="36" />
    </DKStripButton>
    <DKStripButton text="Quit">
      <img src="@/assets/exit-run.svg" height="36" />
    </DKStripButton>
  </DKBottomActions>
</template>
