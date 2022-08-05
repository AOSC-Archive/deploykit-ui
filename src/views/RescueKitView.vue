<script setup>
import DKListSelect from "@/components/DKListSelect.vue";
import DKBottomSteps from "../components/DKBottomSteps.vue";
</script>

<script>
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

export default {
  inject: ["config"],
  methods: {
    load_default: function load_default() {
      if (this.config.rescue == null) {
        if (options[0].disabled) return 1;
        return null;
      }
      return !this.config.rescue | 0;
    },
  },
  data: function () {
    return {
      selected: this.load_default(),
    };
  },
};
</script>

<template>
  <div>
    <h1>{{ $t("rescue.title") }}</h1>
    <p>{{ $t("rescue.p1") }}</p>
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
