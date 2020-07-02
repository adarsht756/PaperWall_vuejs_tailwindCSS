import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import("./assets/css/output.css");
import("./assets/css/styles.css");
import "nprogress/nprogress.css";

Vue.config.productionTip = false;
Vue.config.silent = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
