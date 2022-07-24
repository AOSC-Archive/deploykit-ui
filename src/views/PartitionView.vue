<script setup>
import DKIconButton from "@/components/DKIconButton.vue";
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
};
</script>

<template>
  <div>
    <h1>Partitioning</h1>
    <section v-if="!new_disk">
      <p>
        Please select a partition as AOSC OS system partition. If you would like
        to make changes to your partitions, please select the "GParted" button
        below.
      </p>
      <section></section>
    </section>

    <section v-if="new_disk">
      <p>
        It seems like you have an empty or new storage device. Installer can
        help you create a standard partition schemebased on your storage
        configuration, as you press "Next," installer will partition your
        storage device based on thefollowing specifications.
      </p>
      <ul>
        <li>Create a <strong>512MiB</strong> EFI System Partition.</li>
        <li>Create a <strong>127.5GiB</strong> AOSC OS System Partition.</li>
        <ul>
          <li><strong>5GiB</strong> will be reserved for RescueKit.</li>
        </ul>
      </ul>
      <p>
        If you would like to partition the storage device yourself, please press
        the "GParted" button below.
      </p>
    </section>
  </div>
  <DKBottomActions>
    <DKIconButton title="GParted" explain="Manange Partitions">
      <img src="@/assets/drive-harddisk-root-symbolic.svg" height="36" />
    </DKIconButton>
    <DKStepButtons />
  </DKBottomActions>
</template>
