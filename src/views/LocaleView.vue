<script setup>
import DKFilterSelect from "@/components/DKFilterSelect.vue";
import DKBottomSteps from "../components/DKBottomSteps.vue";
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
      selected_locale: null,
      rtc_tz: 0,
      timezone: null,
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
      <DKFilterSelect
        :options="locales"
        @update:selected="(v) => (selected_locale = v)"
      />
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
      <p class="select">
        <select id="timezone" name="timezone" v-model="timezone"></select>
      </p>
      <label for="rtc">RTC Timezone</label>
      <p class="select">
        <select id="rtc" name="rtc" v-model="rtc_tz">
          <option value="0">UTC (Recommended)</option>
          <option value="1">Local time (like Windows)</option>
        </select>
      </p>
    </form>
  </div>
  <DKBottomSteps />
</template>

<style scoped>
input,
select {
  margin-bottom: 0.5em;
  width: 100%;
}
</style>
