import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Element from 'element-ui'
import mavonEditor from 'mavon-editor'

import "element-ui/lib/theme-chalk/index.css"
import 'mavon-editor/dist/css/index.css'

import "./api/Utils/permission"

Vue.use(Element)
Vue.use(mavonEditor)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
