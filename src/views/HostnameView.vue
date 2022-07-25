<script setup>
import DKBottomSteps from "../components/DKBottomSteps.vue";
</script>

<script>
export default {
  data: function () {
    return {
      name: "",
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
  <DKBottomSteps :guard="validate" :can_proceed="name != ''" />
</template>
