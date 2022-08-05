<script>
const lang_data = [
  { id: "en", title: "AOSC OS Installer", lang: "English (United States)" },
  { id: "zh-CN", title: "AOSC OS 安装程序", lang: "简体中文" },
  { id: "zh-TW", title: "AOSC OS 安裝程式", lang: "中文（臺灣）" },
  { id: "ja", title: "AOSC OS インストーラー", lang: "日本語" },
];
export default {
  data: function () {
    return { lang_data: lang_data };
  },
  methods: {
    select: function (idx) {
      this.$emit("update:lang", this.lang_data[idx].id);
    },
  },
};
</script>

<template>
  <div class="overlay">
    <ul style="padding: 0">
      <button
        class="button"
        v-for="(l, idx) in lang_data"
        v-bind:key="idx"
        @click="select(idx)"
      >
        <div class="text-box">
          <h2>{{ l.title }}</h2>
          <span>{{ l.lang }}</span>
        </div>
      </button>
    </ul>
  </div>
</template>

<style scoped>
div.overlay {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 67%;
  margin: 5vh auto 0;
  z-index: 100;
}
.button {
  height: 100%;
  align-items: flex-start;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 0.3rem;
}
.text-box {
  line-height: 1.5;
  margin: 0.7rem;
  margin-left: 1rem;
  text-align: left;
}

.text-box h2 {
  font-weight: 600;
}
</style>
