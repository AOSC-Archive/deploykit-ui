<script>
export default {
  props: {
    message: String,
  },
};
</script>

<template>
  <div>
    <h1>Error</h1>
    <p>Installer has encountered an error.</p>
    <p class="error-msg">{{ message }}</p>
  </div>
</template>
