// =========================================================
// * Vue Material Kit - v1.2.2
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-kit
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-kit/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import lazyload from "vue-lazyload";
import MaterialKit from "./plugins/material-kit";

const loading = "https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif";
const errorLoading = "https://www.techpowerup.com/img/r1eQF5N0FcRVaef6.jpg";

Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.use(lazyload, {
  preLoad: 1.3,
  error: errorLoading,
  loading: loading,
  attempt: 1
});

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
