<script setup>
import DKBottomSteps from "../components/DKBottomSteps.vue";
</script>

<script>
export default {
  data: function () {
    return {
      user: "",
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
        this.error_msg = "Username can't be empty.";
        return false;
      }
      if (this.pwd.length < 1 || this.pwd2.length < 1) {
        this.error_msg = "Password can't be empty.";
        return false;
      }
      if (this.pwd !== this.pwd2) {
        this.error_msg = "Passwords do not match.";
        return false;
      }
      if (!/^[a-z][a-z0-9-]*$/.test(username)) {
        this.error_msg = "Invalid username.";
        return false;
      }
      this.error_msg = "";
      return true;
    },
  },
};
</script>

<template>
  <div>
    <h1>User Account</h1>
    <p>
      Please enter and confirm your desired username and password. Please note
      that your username must start with a lower-cased alphabetical letter
      (a-z), and contain only lower-cased letters a-z, numbers 0-0, and dash
      ("-").
    </p>
    <form class="form-layout">
      <label for="username">Username</label>
      <input id="username" name="username" type="text" v-model="user" />
      <label for="pwd">Password</label>
      <input id="pwd" name="pwd" type="password" v-model="pwd" />
      <label for="pwd2">Confirm Password</label>
      <input id="pwd2" name="pwd2" type="password" v-model="pwd2" />
    </form>
    <p class="error-msg">{{ error_msg }}</p>
  </div>
  <DKBottomSteps :guard="validate" :can_proceed="can_proceed" />
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
