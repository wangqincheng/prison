import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/style.scss'
import './assets/css/icon/iconfont.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')