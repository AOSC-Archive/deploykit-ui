<script setup>
import DKBottomActions from "@/components/DKBottomActions.vue";
import DKBottomRightButtons from "@/components/DKBottomRightButtons.vue";
</script>

<script>
export default {
  methods: {
    finish: function () {
      this.$ipc.call("finish").then(window.close);
    },
  },
};
</script>

<template>
  <div>
    <h1>And... Done!</h1>
    <p>Installer has successfully installed AOSC OS on your device!</p>
    <p>
      As you click on "Finish," Installer will restart your device and AOSC OS
      will take it from here. Please eject or unplug your installation media
      when prompted to do so.
    </p>
    <p>Thank you for your time and for choosing AOSC OS!</p>
  </div>
  <DKBottomActions>
    <DKBottomRightButtons>
      <button class="button" @click="finish">Finish</button>
    </DKBottomRightButtons>
  </DKBottomActions>
</template>
