import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
import ('./assets/css/output.css');
import ('./assets/css/styles.css');
Vue.config.productionTip = false;
import 'nprogress/nprogress.css';
new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount("#app");
