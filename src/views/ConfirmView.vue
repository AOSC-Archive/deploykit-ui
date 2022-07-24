<script>
import DKBottomSteps from "../components/DKBottomSteps.vue";
export default {
  props: {
    part: String,
    part_fmt: String,
    variant: String,
    cdn_name: String,
    username: String,
    locale: String,
    timezone: String,
    rtc_utc: Boolean,
    rescue_size: Number,
  },
  components: { DKBottomSteps },
};
</script>

<template>
  <div>
    <h1>Pre-Flight Check</h1>
    <p>Installer will perform the following operations:</p>
    <ul>
      <li>
        <span class="emphasis">/dev/nvme0n1p2</span> will be
        <span class="emphasis">erased and formatted as ext4</span>.
      </li>
      <ul v-if="rescue_size > 0">
        <li>
          <span class="emphasis"
            >A {{ rescue_size }}GiB partition will be created for
            RescueKit.</span
          >.
        </li>
      </ul>
      <li>
        AOSC OS <span class="emphasis">Desktop</span> will be downloaded from
        <span class="emphasis">Fastly CDN</span>.
      </li>
      <li>User <span class="emphasis">anan</span> will be created.</li>
      <li>
        AOSC OS will use the
        <span class="emphasis">English (United States)</span> locale.
      </li>
      <li>
        Your timezone will be set to
        <span class="emphasis">Asia/Shanghai</span>.
      </li>
      <ul>
        <li>
          AOSC OS will use <span class="emphasis">UTC as local time</span>.
        </li>
      </ul>
    </ul>
    <p style="line-height: 1">
      <i class="emphasis" style="font-size: 0.9rem">
        If everything looks right to you, by pressing "Next," Installer will
        begin downloading, installing, and configuring AOSC OS on your device.
        Otherwise, please use the "Previous" button to go back top revious
        configuration pages.
      </i>
    </p>
  </div>
  <DKBottomSteps />
</template>

<style scoped>
.emphasis {
  color: var(--dk-accent);
  font-weight: 600 !important;
}
</style>
