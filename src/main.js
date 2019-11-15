
///DONT CLOSE UMPROVE DESIGN
/// WORST CASE  > github revert

import Vue from "vue";
import App from "./App.vue";

import { MdField } from "vue-material/dist/components";
import { MdCard } from "vue-material/dist/components";

import "vue-material/dist/vue-material.min.css";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default-dark.css";








Vue.use(MdField);
Vue.use(MdCard);
Vue.use(VueMaterial);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");