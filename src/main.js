import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@assets/scss/reset.scss";
import Common from "@comp";
import animated from "animate.css";

Vue.use(animated);
Vue.config.productionTip = false;
Vue.use(Common);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
