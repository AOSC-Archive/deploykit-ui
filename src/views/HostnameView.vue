<script setup>
import DKBottomSteps from "../components/DKBottomSteps.vue";
</script>

<script>
function generate_hostname() {
  let output = "aosc-";
  const random = new Uint8Array(4);
  window.crypto.getRandomValues(random);
  for (let i = 0; i < 4; i++) {
    output += random[i].toString(16);
  }
  return output;
}

export default {
  inject: ["config"],
  data: function () {
    return {
      name: this.config.hostname || generate_hostname(),
      err_msg: "",
    };
  },
  methods: {
    validate: function () {
      if (!/^[a-z0-9-]+$/.test(this.name)) {
        this.err_msg = "Hostname contains invalid characters.";
        return false;
      }
      this.err_msg = "";
      return true;
    },
  },
};
</script>

<template>
  <div>
    <h1>Hostname</h1>
    <p>
      Please input your desired hostname. This is otherwise known as a device
      name used for identification. Your hostname may only consist letters a-z,
      numbers 0-9, and dashes ("-").
    </p>
    <form class="form-layout">
      <label for="hostname">Hostname</label>
      <input id="hostname" name="hostname" v-model="name" />
    </form>
    <p class="error-msg">{{ err_msg }}</p>
  </div>
  <DKBottomSteps
    :trigger="() => (config.hostname = name)"
    :guard="validate"
    :can_proceed="name != ''"
  />
</template>
