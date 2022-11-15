import { createPinia } from "pinia";
import { createApp } from "vue";
import { md3 } from "vuetify/blueprints";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import "./styles/global.css";

loadFonts();
const pinia = createPinia();

createApp(App).use(vuetify, md3).use(router).use(pinia).mount("#app");
