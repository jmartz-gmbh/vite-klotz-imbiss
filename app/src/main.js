import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routes";
import { createPinia } from "pinia";
import plausible from "./plugins/plausible";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faTimes,
  faInfo,
  faEdit,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "hello world",
    },
  },
  de: {
    message: {
      hello: "こんにちは、世界",
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "de",
  fallbackLocale: "en",
  messages,
});

const plausibleOptions = {
  domain: "www.klotz-imbiss.de",
  apiHost: "https://tracking.jmartz.gmbh",
  hashMode: false,
  trackLocalhost: false,
};

const app = createApp(App);
library.add(faBars, faPlus, faTimes, faInfo, faEdit);
app.use(i18n);
app.component("fa", FontAwesomeIcon);
app.use(plausible, plausibleOptions);
app.use(createPinia());
app.use(routes);
app.mount("#app");
