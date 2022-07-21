<script setup>
import DKFilterSelect from "@/components/DKFilterSelect.vue";
</script>

<script>
export default {
  data: function () {
    return {
      locales: [
        {
          text: "English",
          data: "en_US",
        },
        {
          text: "中文",
          data: "zh_CN",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <h1>Locale & Time</h1>
    <p>
      Please select your preferred locale. Your locale setting will affect your
      system's display language and other preferences.
    </p>
    <form class="form-layout">
      <label for="locale">Locale</label>
      <DKFilterSelect :options="locales" />
    </form>
    <p>
      Finally, please select your local time zone. UTC system time is the
      default setting for Linux systems, but may result intime discrepancy with
      your other operating systems like Windows. Setting local time as system
      time will prevent this.
    </p>
    <p class="error-msg"></p>
    <form class="form-layout">
      <label for="timezone">Timezone</label>
      <select name="timezone"></select>
      <label for="rtc">RTC Timezone</label>
      <select name="rtc">
        <option value="0">UTC (Recommended)</option>
        <option value="1">Local time (like Windows)</option>
      </select>
    </form>
  </div>
</template>

<style scoped>
.error-msg {
  color: var(--dk-accent);
}

input,
select {
  margin-bottom: 0.5em;
}
</style>
