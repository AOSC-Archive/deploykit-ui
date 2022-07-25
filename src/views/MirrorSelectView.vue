<script setup>
import DKBottomActions from "@/components/DKBottomActions.vue";
import DKStepButtons from "@/components/DKStepButtons.vue";
</script>

<template>
  <div>
    <h1>Download Source</h1>
    <section>
      <p>
        Below are a list of available mirrors to download AOSC OS from. You may
        make selection based on the mirror's locationor by benchmarking them
        using the "Benchmark..." button.
      </p>
      <div></div>
    </section>
  </div>
  <DKBottomActions>
    <button class="button">Benchmark...</button>
    <DKStepButtons />
  </DKBottomActions>
</template>
