<script setup>
import DKBottomSteps from "../components/DKBottomSteps.vue";
</script>

<script>
export default {
  inject: ["config"],
  data: function () {
    return {
      user: this.config.user || "",
      pwd: "",
      pwd2: "",
      error_msg: "",
    };
  },
  computed: {
    can_proceed: function () {
      return !!this.user.trim() && !!this.pwd && !!this.pwd2;
    },
  },
  methods: {
    validate: function () {
      const username = this.user.trim();
      if (!username) {
        this.error_msg = this.$t("user.bad1");
        return false;
      }
      if (this.pwd.length < 1 || this.pwd2.length < 1) {
        this.error_msg = this.$t("user.bad2");
        return false;
      }
      if (this.pwd !== this.pwd2) {
        this.error_msg = this.$t("user.bad3");
        return false;
      }
      if (!/^[a-z][a-z0-9-]*$/.test(username)) {
        this.error_msg = this.$t("user.bad4");
        return false;
      }
      this.error_msg = "";
      return true;
    },
    save_config: function () {
      this.config.user = this.user;
      this.config.pwd = this.pwd;
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ $t("user.title") }}</h1>
    <p>{{ $t("user.p1") }}</p>
    <form class="form-layout">
      <label for="username">{{ $t("user.l1") }}</label>
      <input id="username" name="username" type="text" v-model="user" />
      <label for="pwd">{{ $t("user.l2") }}</label>
      <input id="pwd" name="pwd" type="password" v-model="pwd" />
      <label for="pwd2">{{ $t("user.l3") }}</label>
      <input id="pwd2" name="pwd2" type="password" v-model="pwd2" />
    </form>
    <p class="error-msg">{{ error_msg }}</p>
  </div>
  <DKBottomSteps
    :trigger="save_config"
    :guard="validate"
    :can_proceed="can_proceed"
  />
</template>

<style scoped>
.error-msg {
  color: var(--dk-accent);
}
.form-layout {
  display: grid;
  grid-template-columns: 40% 60%;
}
input {
  margin-bottom: 0.5em;
}
</style>
