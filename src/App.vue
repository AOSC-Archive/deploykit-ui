<script setup>
import { RouterView } from "vue-router";
import DKLogo from "@/components/DKLogo.vue";
</script>

<script>
export default {
  data: function () {
    return {
      page_number: 0,
      progress: 10,
      config: {},
    };
  },
  methods: {
    on_abort: function () {
      this.$router.push("/abort");
    },
    nav_menu_bold: function (step) {
      return this.page_number >= step ? "active" : "";
    },
  },
  mounted: function () {
    const my = this;
    this.$router.beforeEach((to) => {
      if (to.name == "error" || to.name == "abort") return null;
      my.page_number = to.meta.steps;
      my.progress = my.page_number * 25;
    });
  },
};
</script>

<template>
  <div style="padding: 0 2rem; margin-bottom: 1rem">
    <button
      class="quit-button"
      style="padding-top: 1rem"
      aria-label="close button"
      @click="on_abort"
      @keyup.enter="on_abort"
    >
      <img
        alt="window close icon"
        src="@/assets/window-close-symbolic.svg"
        width="30"
        height="30"
      />
    </button>
    <header>
      <DKLogo />
    </header>
  </div>
  <!-- main content -->
  <div class="main-container">
    <div style="width: 12rem">
      <div class="wrapper">
        <nav :class="nav_menu_bold(0)">Introduction</nav>
        <nav :class="nav_menu_bold(1)">User Preferences</nav>
        <nav :class="nav_menu_bold(2)">Installation</nav>
        <nav :class="nav_menu_bold(3)">Final Steps</nav>
      </div>
    </div>
    <main>
      <div style="height: 100%; overflow-y: auto; margin-right: 3rem">
        <RouterView />
      </div>
    </main>
  </div>
  <!-- status bar -->
  <div class="status-bar">
    <progress
      id="progressbar"
      aria-label="overall progress"
      :value="progress"
      max="100"
      class="progress-bar"
    ></progress>
    <span class="info-box" v-if="page_number > 1 && page_number < 4"
      ><i
        >Step 5/7: Generating initramfs (initial RAM filesystem)... (91%)</i
      ></span
    >
    <label for="progressbar" class="eta-box"
      >25 - 30 minutes remaining...</label
    >
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 0 2rem;
  height: 75vh;
}

.main-container main {
  padding-top: 1rem;
  margin-left: 4rem;
  max-width: 35vw;
  height: 100%;
}

.status-bar {
  position: absolute;
  bottom: 2em;
  left: 0;
  width: 100%;
}

.progress-bar {
  appearance: none;
  display: block;
  background: var(--dk-inactive);
  border: 0;
  width: 100%;
  height: 10px;
}

.progress-bar[value]::-webkit-progress-value {
  background: var(--dk-accent);
  transition: width 200ms;
}

.progress-bar::-moz-progress-bar {
  background: var(--dk-accent);
}

.info-box {
  margin-top: 0.5em;
  float: left;
  margin-left: 0.3rem;
}

.eta-box {
  float: right;
  margin-top: 0.5em;
  margin-right: 0.5em;
}

.quit-button {
  float: right;
  cursor: pointer;
  appearance: none;
  background: transparent;
  border: 0;
}

header {
  line-height: 1.5;
  width: 30%;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: start;
    padding-top: 0.5rem;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: calc(60px + 0.5em);
    font-size: 1rem;
    color: var(--dk-gray);

    padding: 0.3rem 0;
    margin-top: 1rem;
  }

  nav.active {
    color: #eeeeee;
    font-weight: bold;
  }
}
</style>
