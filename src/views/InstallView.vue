<script>
import slides_data from "@/slides";
import DKIconButton from "@/components/DKIconButton.vue";

export default {
  data: function () {
    return {
      current_slide: {},
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
  },
  mounted: function () {
    this.next_slide();
    this.timer = setInterval(this.next_slide, 6000);
  },
  beforeUnmount: function () {
    clearInterval(this.timer);
  },
  components: { DKIconButton },
};
</script>

<template>
  <div :class="'slide-show' + (hide ? ' hidden' : '')">
    <h1>{{ current_slide.title }}</h1>
    <article>
      <p v-for="(para, index) in current_slide.paras" v-bind:key="index">
        {{ para }}
      </p>
    </article>
  </div>
  <p style="display: flex; column-gap: 0.5rem">
    <DKIconButton title="Firefox" explain="Web Browser">
      <img src="@/assets/web-browser-symbolic.svg" height="36" />
    </DKIconButton>
    <DKIconButton title="BGM" explain="Mute">
      <img src="@/assets/audio-volume-muted.svg" height="36" />
    </DKIconButton>
  </p>
</template>

<style>
.hidden {
  opacity: 0;
}

.slide-show {
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
