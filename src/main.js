import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";


require('@/styles.css')

createApp(App)

  .use(router)
  .mount("#app");
