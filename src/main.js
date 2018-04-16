import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueResource from "vue-resource";
import VueNativeSock from "vue-native-websocket";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import router from "./router";
import store from "./store";

import App from "./App.vue";

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueNativeSock, "ws://localhost:8000/ws/chat/1/", {
  store,
  format: "json",
  reconnection: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
