import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import ruter from "./router/intex";

loadFonts();

createApp(App).use(vuetify, ruter).mount("#app");
