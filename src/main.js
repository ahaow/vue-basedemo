import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filter from './filter/'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;

import { home } from "./api";
console.log(home)

// 全局注册filter
Object.keys(filter).forEach(key => {
  Vue.filter(key,filter[key])
});
Vue.use(VueAxios,axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
