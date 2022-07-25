import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import ipc from "./ipc";

import "./assets/main.css";

const app = createApp(App);

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
});

app.use(router);
app.use(i18n);
app.use(ipc);

app.mount("#app");
