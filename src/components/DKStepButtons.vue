<script setup>
import DKBottomRightButtons from "./DKBottomRightButtons.vue";
</script>

<script>
export default {
  props: {
    guard: Function,
    can_proceed: { type: Boolean, default: true },
    no_previous: Boolean,
  },
  methods: {
    proceed: function () {
      if (this.guard) {
        if (!this.guard(this)) return;
      }
      this.$router.push(this.$router.currentRoute.value.meta.next);
    },
  },
};
</script>

<template>
  <DKBottomRightButtons>
    <button class="button" @click="$router.back()" :disabled="no_previous">
      Previous
    </button>
    <button class="button" @click="proceed" :disabled="can_proceed === false">
      Next
    </button>
  </DKBottomRightButtons>
</template>
