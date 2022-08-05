<script>
import slides_data from "@/slides";
import DKStripButton from "@/components/DKStripButton.vue";
import DKBottomActions from "@/components/DKBottomActions.vue";

export default {
  data: function () {
    return {
      current_slide: {
        title: "Loading ...",
        body: "",
      },
      index: 0,
      timer: null,
      slides: slides_data,
      hide: false,
    };
  },
  methods: {
    next_slide: function () {
      this.hide = true;
      const next_slide = this.slides[++this.index % this.slides.length];
      setTimeout(() => {
        this.current_slide = {
          title: next_slide.title,
          paras: next_slide.body.split("\n"),
        };
        this.hide = false;
      }, 200);
    },
    launch_ff: function () {
      this.$ipc.call("exec_nowait", ["firefox"]);
    },
  },
  mounted: function () {
    this.current_slide = {
      title: this.slides[0].title,
      paras: this.slides[0].body.split("\n"),
    };
    this.timer = setInterval(this.next_slide, 6000);
  },
  beforeUnmount: function () {
    clearInterval(this.timer);
  },
  components: { DKStripButton, DKBottomActions },
};
</script>

<template>
  <div :class="'slide-show' + (hide ? ' hidden' : '')" @click="next_slide">
    <h1>{{ current_slide.title }}</h1>
    <article>
      <p v-for="(para, index) in current_slide.paras" v-bind:key="index">
        {{ para }}
      </p>
    </article>
  </div>
  <DKBottomActions>
    <DKStripButton
      omit_bline="1"
      show_arrow="1"
      text="Launch Firefox"
      @click="launch_ff"
    >
      <img src="@/assets/web-browser-symbolic.svg" height="36" />
    </DKStripButton>
    <DKStripButton text="Mute BGM">
      <img src="@/assets/audio-volume-muted.svg" height="36" />
    </DKStripButton>
  </DKBottomActions>
</template>

<style>
.hidden {
  opacity: 0;
}

.slide-show {
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
