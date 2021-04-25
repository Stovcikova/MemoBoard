import Vue from 'vue'
import AppComponent from './components/app/app.js'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(AppComponent)
}).$mount('#app')
