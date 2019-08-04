import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
import VModal from 'vue-js-modal'

Vue.use(VModal, {height: '50%'})
Vue.use(VueLazyLoad)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
