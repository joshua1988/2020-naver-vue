import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

Vue.config.productionTip = false;

new Vue({
  // el: '#app',
  // data: {},
  router: router,
  store,
  render: h => h(App)
}).$mount("#app");
