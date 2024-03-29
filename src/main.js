// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
NProgress.configure({ 
  easing: 'ease', // 动画方式 
  speed: 500, // 递增进度条的速度 
  showSpinner: false, // 是否显示加载ico 
  trickleSpeed: 200, // 自动递增间隔 
  minimum: 0.3 // 初始化时的最小百分比 
})

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//数字滚动
import VueCountUp from 'vue-countupjs'
Vue.use(VueCountUp)

import VCharts from 'v-charts'
Vue.use(VCharts)

import '@/styles/index.scss' // global css
import App from './App'
import router from './router'
import store from './store'
import '@/icons/index.js' // icon
import '@/assets/fonts/iconfont.css'
import 'babel-polyfill'
Vue.use(Element)
Vue.config.productionTip = false
/* eslint-disable no-new */

router.beforeEach((to, from , next) => {
  // 每次切换页面时，调用进度条
  NProgress.start();
  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next();
});

router.afterEach(() => {  
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
