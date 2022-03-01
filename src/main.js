import Vue from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

library.add(faEye, faGoogle, faFacebookF, faCircleCheck);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
