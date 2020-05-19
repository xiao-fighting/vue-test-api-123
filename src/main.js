import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCannabis, faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/style/style.stylus'

library.add(faCannabis, faBalanceScale)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
