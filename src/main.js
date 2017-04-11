// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './views/Index'
import router from './router'
import Vuex from 'Vuex'
// import './common/css/base.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false


// 注意要先定义filter
// 自定义filter设置图片代理, 防止图片403
Vue.filter('proxyImg', (url) => {
	return url.replace(/^http(s)?:\/\/(?=pic)/, 'https://images.weserv.nl/?url=')
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Index/>',
  components: { Index }
})
Vue.use(Vuex);

