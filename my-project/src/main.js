// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './lib/mui/js/mui.js'
import './lib/mui/js/mui.min.js'
import'mint-ui/lib/style.css'
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
//1.引入header button Swipe组件 引入轮播组件
import {Header,Button,Swipe,SwipeItem} from "mint-ui"
//引入axios 库
import axios from "axios"

//引入qs模块
import qs from "qs"
import $ from "jquery"
//配置跨域访问选项
axios.defaults.withCredentials=true
//将axios配置vue实例中
Vue.prototype.axios=axios;
//解决axios post请求问题 
Vue.prototype.qs=qs;
//引入无限滚动指令
import { InfiniteScroll } from 'mint-ui';
//注册无限滚动组件
Vue.use(InfiniteScroll);
//注册header button Swipe 组件
Vue.component(Header.name,Header);
Vue.component(Button.name,Button);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
