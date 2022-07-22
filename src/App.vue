<script setup>
import { RouterView } from "vue-router";
import DKLogo from "@/components/DKLogo.vue";
</script>

<script>
export default {
  data: function () {
    return {
      page_number: 0,
    };
  },
  methods: {
    on_abort: function () {
      this.$router.push("/abort");
    },
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
    <div>
      <div class="wrapper">
        <nav class="active">Introduction</nav>
        <nav>User Preferences</nav>
        <nav>Installation</nav>
        <nav>Final Steps</nav>
      </div>
    </div>
    <main style="padding-top: 1rem; margin-left: 4rem; max-width: 35vw">
      <div style="max-height: 65vh; overflow-y: auto; margin-right: 5rem">
        <RouterView />
        <!-- <div style="display: flex; float: right; margin-right: 1em">
          <DKArrowButton :left="true">Previous</DKArrowButton>
          <DKArrowButton>Next</DKArrowButton>
        </div> -->
      </div>
    </main>
  </div>
  <!-- status bar -->
  <div class="status-bar">
    <progress
      id="progressbar"
      aria-label="overall progress"
      value="10"
      max="100"
      class="progress-bar"
    ></progress>
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
  max-height: 100vh;
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
