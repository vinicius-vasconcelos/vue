import Vue from 'vue'
import App from './App.vue'
import MainNav from "./components/MainNav.vue";


import Notifications from 'vue-notification'
Vue.use(Notifications)

Vue.config.productionTip = false;


Vue.component('MainNav', MainNav)

new Vue({
  render: h => h(App),
}).$mount('#app')
