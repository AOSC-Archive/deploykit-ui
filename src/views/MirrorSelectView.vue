<script setup>
import DKBottomActions from "@/components/DKBottomActions.vue";
import DKStepButtons from "@/components/DKStepButtons.vue";
import DKStripButton from "@/components/DKStripButton.vue";
</script>

<template>
  <div>
    <h1>Download Source</h1>
    <section>
      <p>
        Below are a list of available mirrors to download AOSC OS from. You may
        make selection based on the mirror's location or by benchmarking them
        using the "Benchmark..." button.
      </p>
      <div></div>
    </section>
  </div>
  <DKBottomActions>
    <DKStripButton text="Benchmark...">
      <img src="@/assets/histogram-symbolic.svg" height="36" />
    </DKStripButton>
    <DKStepButtons />
  </DKBottomActions>
</template>
