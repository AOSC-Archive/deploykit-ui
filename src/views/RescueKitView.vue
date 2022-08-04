<script setup>
import DKListSelect from "@/components/DKListSelect.vue";
import DKBottomSteps from "../components/DKBottomSteps.vue";

const options = [
  {
    title: "Yes",
    body: "Installer has detected insufficient space on your storage device. RescueKit requires 5GiB of additional space in your system partition to install.",
    disabled: true,
  },
  {
    title: "No (Not Recommended)",
    body: "Without RescueKit, you will likely need to use an external live media to repair or reinstall AOSC OS.",
    hl: true,
  },
];
</script>

<script>
export default {
  inject: ["config"],
  data: function () {
    return {
      selected: !this.config.rescue | 0,
    };
  },
};
</script>

<template>
  <div>
    <h1>RescueKit</h1>
    <p>
      RescueKit is a rescue environment for AOSC OS. RescueKit provides tools
      for data backup and recovery, reinstallation, and more. Would you like to
      install RescueKit?
    </p>
    <section>
      <DKListSelect
        :options="options"
        :selected="selected"
        @update:selected="(v) => (selected = v)"
      />
    </section>
  </div>
  <DKBottomSteps
    :trigger="() => (config.rescue = !selected)"
    :can_proceed="selected != null"
  />
</template>

<style scoped>
.error-msg {
  color: var(--dk-accent);
}
</style>
