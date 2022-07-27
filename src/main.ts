import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import VueI18n from "@/locales/i18n";

import "@/utils/initRem";
import "@/assets/css/index.scss";
const pinia = createPinia();

const app = createApp(App);
app.config.globalProperties.$t = VueI18n.global.t;


app.use(router).use(pinia).use(VueI18n).mount("#app");
