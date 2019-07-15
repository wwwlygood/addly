import Vue from "vue"
import Router from 'vue-router'
//引入helloworld组件
import HelloWorld from "./components/HelloWorld.vue"
//引入home组件
import Home from "./components/tabbar/Home.vue"
//引入Productlist 组件
import Productlist from "./components/tabbar/Productlist.vue"
//引入center组件
import Center from "./components/tabbar/Center.vue"
//引入Login组件
import Login from "./components/tabbar/Login.vue"
//引入ProductInfo组件
import ProductInfo from "./components/tabbar/ProductInfo.vue"
//引入Shopcart组件
import Shopcart from "./components/tabbar/Shopcart.vue"

Vue.use(Router)
export default new Router({
    routes:[
        {path:"/",component:Home},
        {path:"/Home",component:Home},
        {path:"/Productlist",component:Productlist},
        {path:"/Center",component:Center},
        {path:"/Login",component:Login},
        {path:"/ProductInfo",component:ProductInfo},
        {path:"/Shopcart",component:Shopcart}
    ]
})