<script setup>
import DKListSelect from "@/components/DKListSelect.vue";
import DKBottomSteps from "../components/DKBottomSteps.vue";

const options = [
  {
    title: "Desktop",
    body: "Powered by the KDE Plasma Desktop, comes complete with an elegant and powerful set of applications.",
  },
  {
    title: "Server",
    body: "Comes with tools for hosting remote files and contents, network routing, and other functions that enriches network resource access client devices.",
  },
  {
    title: "Base",
    body: "Minimal system release with a basic set of tools.",
  },
];
</script>

<template>
  <div>
    <h1>Variants</h1>
    <p>Please select from below your desired distribution.</p>
    <section>
      <DKListSelect :options="options" />
    </section>
  </div>
  <DKBottomSteps />
</template>
