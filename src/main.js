import Vue from 'vue'
import App from './App.vue'
//将路由文件导入到main.js里面
import router from './router.js'
//导入阿里图标库
import './static/iconfont/iconfont.css'
//导入轮播(组件、样式)
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// import Vant from 'vant';
// import 'vant/lib/index.css';

//自定义弹框
import Toast from './components/toast/toast.js'
//挂载一下(链式挂载)
Vue.prototype.$toast = Toast

Vue.config.productionTip = false
//轮播组件 进行注册
// Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
