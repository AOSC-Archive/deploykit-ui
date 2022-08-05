<script setup>
import DKFilterSelect from "@/components/DKFilterSelect.vue";
import DKBottomSteps from "../components/DKBottomSteps.vue";
</script>

<script>
export default {
  // TODO: add locales and timezones here
  props: {},
  inject: ["config"],
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
      timezones: [
        {
          text: "UTC (+0:00)",
          data: "UTC",
        },
        {
          text: "Asia/Shanghai (+8:00)",
          data: "Asia/Shanghai",
        },
      ],
      selected_locale: this.config.locale,
      rtc_tz: `${!(this.config.rtc_utc || true) | 0}`,
      timezone: this.config.timezone,
    };
  },
  methods: {
    save_config: function () {
      this.config.rtc_utc = this.rtc_tz == "0";
      this.config.timezone = this.timezone;
      this.config.locale = this.selected_locale;
    },
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
        :default="selected_locale"
        :options="locales"
        id="locale"
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
      <p>
        <DKFilterSelect
          :default="timezone"
          :options="timezones"
          id="timezone"
          @update:selected="(v) => (timezone = v)"
        />
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
  <DKBottomSteps
    :trigger="save_config"
    :can_proceed="selected_locale != null && timezone != null"
  />
</template>

<style scoped>
input,
select {
  margin-bottom: 0.5em;
  width: 100%;
}
</style>
