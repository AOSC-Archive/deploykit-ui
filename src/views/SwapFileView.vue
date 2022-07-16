<script>
export default {
  props: {},
  data: function () {
    return {
      type: 0,
      size: 0,
      rec_size: 16,
    };
  },
};
</script>

<template>
  <div>
    <h1>Swapfile</h1>
    <p>
      Would you like to create a swapfile? A swapfile could help when your
      system is under high memory load by offloading some of your program data
      to your storage device.
    </p>
    <form>
      <section class="form-layout">
        <label for="swap">Swapfile</label>
        <select name="swap" v-model="type">
          <option :value="0">Automatic</option>
          <option :value="1">Custom</option>
          <option :value="2">Disabled</option>
        </select>
        <div></div>
        <p class="error-msg" v-if="type === 2 || (type === 1 && size == 0)">
          <i>
            Running AOSC OS without a swapfile may cause instability at high
            memory load, resulting in possible application crashes and data
            loss!
          </i>
        </p>
      </section>
      <input
        class="dk-slider"
        type="range"
        :max="rec_size * 2"
        min="0"
        step="0.5"
        v-model="size"
        v-if="type === 1"
      />
      <div class="sliderticks" v-if="type === 1">
        <p>0GiB</p>
        <p>{{ rec_size }}GiB</p>
        <p>{{ rec_size * 2 }}GiB</p>
      </div>
      <br />
      <p v-if="type === 1" style="font-size: 0.9rem; margin-left: 30%">
        <i>Your system has 48GiB of RAM.</i>
        <br />
        <i
          >Installer recommends that you create a swapfile of {{ rec_size }}GiB
          in size.</i
        >
      </p>
    </form>
  </div>
</template>

<style scoped>
.error-msg {
  color: var(--dk-accent);
}

select {
  appearance: none;
  background: var(--dk-button-color);
  border: 0;
  color: var(--color-text);
  text-align: center;
}

select:hover {
  background: #ffffff30;
}

select:focus {
  background: #a2a2a230;
  outline: none;
}

input.dk-slider {
  width: 100%;
  height: 0.25rem;
  background: var(--dk-gray);
  cursor: pointer;
}

input,
select {
  margin-bottom: 0.5em;
}

.dk-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 20px;
  border-radius: 2px;
  background: var(--vt-c-white-mute);
  cursor: pointer;
}

.dk-slider::-moz-range-thumb {
  width: 10px;
  height: 20px;
  border-radius: 2px;
  background: var(--vt-c-white-mute);
  cursor: pointer;
}

/* https://stackoverflow.com/questions/33699852/show-tick-positions-in-custom-range-input */
.sliderticks {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
}

.sliderticks p {
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 1px;
  background: #d3d3d3;
  height: 10px;
  line-height: 40px;
}
</style>
