<script setup>
import DKStripButton from "@/components/DKStripButton.vue";
import DKBottomActions from "@/components/DKBottomActions.vue";
import DKStepButtons from "@/components/DKStepButtons.vue";
</script>

<script>
export default {
  props: {
    partitions: Array,
  },
  computed: {
    new_disk: function () {
      return !this.partitions || this.partitions.length < 1;
    },
  },
  methods: {
    launch_gparted: function () {
      this.$ipc.call("exec", ["gparted"]);
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ $t("part.title") }}</h1>
    <section v-if="!new_disk">
      <p>{{ $t("part.p1") }}</p>
      <section></section>
    </section>

    <section v-if="new_disk">
      <p>{{ $t("part.p2") }}</p>
      <ul>
        <i18n-t keypath="part.l1" tag="li">
          <strong>128MiB</strong>
        </i18n-t>
        <i18n-t keypath="part.l2" tag="li">
          <strong>20GiB</strong>
        </i18n-t>
      </ul>
      <p>
        {{ $t("part.p3") }}
      </p>
    </section>
  </div>
  <DKBottomActions>
    <DKStripButton @click="launch_gparted" :text="$t('part.b1')">
      <img src="@/assets/drive-harddisk-root-symbolic.svg" height="18" />
    </DKStripButton>
    <DKStepButtons />
  </DKBottomActions>
</template>
