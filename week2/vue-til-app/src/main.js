import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";

Vue.config.productionTip = false;

new Vue({
  // el: '#app',
  // data: {},
  router: router,
  render: h => h(App)
}).$mount("#app");
