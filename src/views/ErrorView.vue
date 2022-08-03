<script>
import DKBottomActions from "@/components/DKBottomActions.vue";
import DKBottomRightButtons from "@/components/DKBottomRightButtons.vue";

export default {
  props: {
    message: String,
  },
  components: { DKBottomActions, DKBottomRightButtons },
};
</script>

<template>
  <div>
    <h1>Error</h1>
    <p>Installer has encountered an error.</p>
    <p class="error-msg">{{ message }}</p>
  </div>
  <DKBottomActions>
    <DKBottomRightButtons>
      <button class="button" @click="$router.replace('/')">Retry</button>
      <button class="button" @click="proceed">Exit</button>
    </DKBottomRightButtons>
  </DKBottomActions>
</template>
