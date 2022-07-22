<script setup></script>

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
      <input id="username" name="username" type="text" />
      <label for="pwd">Password</label>
      <input id="pwd" name="pwd" type="password" />
      <label for="pwd2">Confirm Password</label>
      <input id="pwd2" name="pwd2" type="password" />
    </form>
    <p class="error-msg"></p>
  </div>
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
