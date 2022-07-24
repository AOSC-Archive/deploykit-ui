<script setup>
import DKBottomRightButtons from "./DKBottomRightButtons.vue";
</script>

<template>
  <DKBottomRightButtons>
    <button class="button" @click="$router.back()">Previous</button>
    <button
      class="button"
      @click="$router.push($router.currentRoute.value.meta.next)"
    >
      Next
    </button>
  </DKBottomRightButtons>
</template>
