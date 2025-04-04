/*
 =========================================================
 * Vue Black Dashboard - v1.1.3
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard
 * Copyright 2024 GreenHouse Automation (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueRouter from "vue-router";
import RouterPrefetch from "vue-router-prefetch";
import App from "./App";
import router from "./router/index";
import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n";
import "./registerServiceWorker";
import 'vuetify/dist/vuetify.min.css'
// import App from './App.vue';
// import Toast from "vue-toastification";
// import "vue-toastification/dist/index.css";
Vue.use(Vuetify);
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
// Vue.use(Toast, {
//   transition: "Vue-Toastification__bounce",
//   maxToasts: 20,
//   newestOnTop: true
// });
new Vue({
  router,
  i18n,
  render: (h) => h(App),
  vuetify: new Vuetify(),
}).$mount("#app");
