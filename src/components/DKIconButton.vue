<script>
export default {
  props: {
    icon: String,
    title: String,
    explain: String,
  },
};
</script>

<template>
  <button class="button" style="height: 100%">
    <div class="icon-container">
      <img
        class="icon"
        src="@/assets/drive-harddisk-root-symbolic.svg"
        height="36"
      />
      <div class="text-box">
        <span style="font-size: 1rem">{{ explain }}</span>
        <h2 style="font-size: 1.5rem">{{ title }}</h2>
      </div>
    </div>
  </button>
</template>

<style scoped>
.icon {
  margin: 0 0.5rem 0 0;
}

.text-box {
  line-height: 0.9;
  margin-top: 0rem;
}

.icon-container {
  display: flex;
  line-height: 1.5;
  place-items: flex-start;
  flex-wrap: wrap;
  text-align: left;
}
</style>
