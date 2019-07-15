<template>
  <div class="app-home" id="app">
    <!--顶部导航条 mint-ui
    <mt-header title="骆驼商城" fixed></mt-header>-->
    <header id="header" class="mui-bar mui-bar-nav">
		<!--	<img class="head_one" src="../../assets/search.png"></img>-->
             <a class="mui-icon mui-icon-search"></a>
			<img class="head_two" src="../../assets/logo.png"  >
            <a class="mui-icon-extra mui-icon-extra-share "></a>
	</header>
    <!--轮播图 mint-ui -->
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,i)  of navlist" :key="i">
            <img :src="item.img_url" alt="">
        </mt-swipe-item>
    </mt-swipe>
    <!--news-->
    <div class="home_slogn">
        <span>
            <img src="../../assets/down.png"></img>
            骆驼自营爆品
        </span>
        <span>
            <img src="../../assets/down.png"></img>
            7天无忧退换货
        </span>
        <span>
            <img src="../../assets/down.png"></img>
            快递包邮
        </span>
    </div>
    <!--九宫格 mui-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="grid mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item of gridlist">
                <router-link to="/productlist">
		            <!-- <span class="mui-icon mui-icon-home"></span> -->
                    <img :src="item.img_url" alt="" >
		            <div class="mui-media-body">{{item.title}}</div>
                </router-link>
            </li>
        </ul>  
    <!--tabbar mui-->
          <Footer></Footer>
        <!-- 1F-->
        <div class="currency_head"><span>大牌制造商</span></div>     
        <div class="main">
            <div class="main_one">
                <img src="../../assets/270.jpg"></img>
            </div>
            <div class="main_two">
                <img class="main_two_one" src="../../assets/270 (1).jpg"></img>
                <img src="../../assets/270 (2).jpg"></img>
            </div>
        </div>
        <!-- 2F-->   
        <div class="currency_head"><span>户外系列</span></div>
        <div>
            <img class="home_album_top" src="../../assets/540.jpg"></img>
        </div>
        <div class="app-goodlist">
        <!--商品详细信息 start-->
        <div class="goods-item" v-for="item of list">
            <img :src="'http://127.0.0.1:3000/'+ item.md" >
            <h4 class="title">{{item.title}}</h4>
            <div class="info">
                <span class="now">¥{{item.price}}</span>
            </div>
            <div class="sell">
                <span>{{item.color}}</span>
                <span>{{item.rexiao}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Footer from "./Footer.vue"
export default {
    components:{
        Footer
    },
    data(){
        return {
            list:[],
            navlist:[], //轮播图列表
            gridlist:[]
        }
    },
    created(){
        this.handleImage(); 
        this.handleGrid();
        this.loadMore();
    },
    methods:{
        loadMore(){
            //1.创建变量url请求地址
            var url="http://127.0.0.1:3000";
            url+="/loadMore";
            //2.发送ajax请求
            this.axios.get(url).then(result=>{
                //this.list=result.data;
                //var rows=this.list.concat(result.data.data);
               // console.log(result.data.data);
                this.list=result.data.data;
            })
                
        },
        handleGrid(){
            //1.发送ajax获取九宫格数据
            var url="http://127.0.0.1:3000";
            url+="/grid";
            //2.获取返回数据
            this.axios.get(url).then(result=>{
                //console.log(result.data.data)
                this.gridlist=result.data.data
            })
            //3.保存到gridlist
        },
        //加载轮播图数据
        handleImage(){
            //1.发送ajax获取轮播数据
            var url="http://127.0.0.1:3000";
            url+="/imglist";
            this.axios.get(url).then(result=>{
                //2.获取返回结果
                //console.log(result.data.data);
                //3.保存data属性中
                this.navlist=result.data.data;  
            })    
        }
    }
}
</script>
<style scoped>
* { touch-action: pan-y; }
#app{
    padding-bottom:3rem;
}
/*****导航****** */
    #navbar{
        font-size:18px;
        height:44px;
    }
    #header{
        height:3.58rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    #header .mui-icon-search{
        padding-top:1rem;
    }
    #header .head_two{
        height:58px;
    }
   
/******首页轮播*/
    .app-home .mint-swipe{
        height:12rem;
    }
    .app-home .mint-swipe img{
        width:100%;
    }
    .app-home .mint-swipe img{
        width:100%;
    }
/***news***/
    .home_slogn img{
        width:12px;height:12px;
    }
    .home_slogn {
        font-size:.9rem;
        color:#7f2400;
        display:flex;
        justify-content:space-around;
        margin-bottom:1rem;
    }
/****九宫格*****/
    .app-home .mui-grid-9 img{
        width:60px;height:60px;
    }
    .app-home .mui-grid-9 .grid{
        width:25%;
        padding:0;
        border:0;
    }
    .mui-grid-9{
        background-color:#fff;
    }
/****1F****/
    .currency_head{
        height:3rem;
        text-align:left;
        background:#e8e8e8;
        font-size:23px;
        line-height:3rem;
    }
    .currency_head span{
        margin-left:1rem;
    }
    .main{
        display:flex;
        justify-content:space-between;
    }
    .main_one,.main_two{
        width:100%;
    }
    .main_one img{
        width:98%;height:100%;
    }
    .main div{
        border:1px solid #f4f4f3;
    }
    .main_two{
        display:flex;
        flex-direction:column;
    }   
   .main_two img{
       width:98%;
       height:49.8%;
   }
   .main_two_one{
       border-bottom:1px solid #f4f4f3;
   }
/****2F****/
    .home_album_top{
        width:100%;
    }
     .app-goodlist{
        display:flex; /*弹性布局 */
        flex-wrap:wrap; /*子元素换行 */
        justify-content:space-between; /*两端对齐 */
        padding:4px;
    }
    .app-goodlist .goods-item{
        width:49.8%;      /*商品信息元素宽度 */
        border:1px solid #ccc; /*边框 */
        margin:2px 0;   /*外补丁 */
        padding:2px;
        display:flex; /*子元素弹性布局 */
        flex-direction:column; /*排列方式：按列*/
        min-height:245px; /*最小高度 */
        background:#fff;
    }
    /*商品图片*/
    .app-goodlist .goods-item img{
        width:100%;
    }
    .title{
        height:2.1rem;
        font-size:12px; 
    }
    .info{
        height:1.5rem;
        color:#bc3434;
    }
    .sell span:first-child{
        border: 1px solid #cacaca;
        background-color: #e8e8e8;
        border-radius: 1px;
        opacity: .75;
        color: #9b9b9b;
        font-size:13px;
        margin: 0 .05rem;
        padding: .02rem .1rem;
    }
    .sell span:last-child{
        border: 1px solid #e03045;
        border-radius: 1px;
        color: #e03045;
        font-size:13px; 
        margin: 0 .05rem;
        padding: .02rem .1rem;   
    }
</style >