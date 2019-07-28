import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'


Vue.use(VueLazyLoad)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
