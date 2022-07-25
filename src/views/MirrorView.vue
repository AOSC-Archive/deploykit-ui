<script setup>
import DKBottomSteps from "../components/DKBottomSteps.vue";
</script>

<template>
  <div>
    <h1>Download Source</h1>
    <section>
      <p>
        Installer will now detect the fastest mirror to download AOSC OS from.
        If you would like to manual select a mirror, press "Customize..." below.
      </p>
      <button class="button" @click="$router.push('/mirrors-sel')">
        Customize...
      </button>
    </section>
  </div>
  <DKBottomSteps />
</template>
