// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import querystring from 'querystring'

import {Select,Option,Dialog,Button} from 'element-ui'
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Button)
// Vue.component(Select.name,Select);
// 或写为Vue.use(Button)
/* 导入第三方库结束 */


Vue.prototype.$qs = querystring;
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;

//import  VueResource  from 'vue-resource'
//
//Vue.use(VueResource) 

	Vue.use(Element)


Vue.config.productionTip = false
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
