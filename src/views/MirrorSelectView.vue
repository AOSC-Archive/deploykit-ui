<script setup>
import DKBottomActions from "@/components/DKBottomActions.vue";
import DKStepButtons from "@/components/DKStepButtons.vue";
import DKStripButton from "@/components/DKStripButton.vue";
</script>

<template>
  <div>
    <h1>{{ $t("mirror.title") }}</h1>
    <section>
      <p>{{ $t("mirror.p2") }}</p>
      <div>
        <!-- selection menu -->
      </div>
    </section>
  </div>
  <DKBottomActions>
    <DKStripButton :text="$t('mirror.b2')">
      <img src="@/assets/histogram-symbolic.svg" height="36" />
    </DKStripButton>
    <DKStepButtons />
  </DKBottomActions>
</template>
