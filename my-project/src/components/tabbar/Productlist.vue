<template>
    <div class="app-goodlist">
        <!--导航-->
        <header id="header" class="mui-bar mui-bar-nav">
			
			<h1 class="mui-title">商品列表</h1>
		</header>
        <!--商品详细信息 start-->
            <div class="goods-item" v-for="item of list">
                <img :src="'http://127.0.0.1:3000/'+ item.md" :data-lid="item.lid" @click="jumpInfo">
                <h4 class="title">{{item.title}}</h4>
                <div class="info">
                    <span class="now">¥{{item.price}}</span>
                </div>
                <div class="sell">
                    <span>{{item.color}}</span>
                    <span>{{item.rexiao}}</span>
                </div>
            </div>
        <!--商品详细信息 end-->
        <!--加载更多-->
        <mt-button size="large" type="primary" @click="loadMore" >加载更多</mt-button>
        <span class="mui-icon mui-icon-arrowleft" @click="skip"></span>
    </div>
</template>
<script>
export default {
    data(){
        return { 
            list:[],  //模板中显示商品信息
            pno:0,
            pageSize:6
        }
    },
    created(){
        //当组件创建成功后立即调用加载下一页方法
        this.loadMore();
    },
    methods:{
        skip(){
            this.$router.push("/Home")
        },
        jumpInfo(e){
            var lid=e.target.dataset.lid;
            //跳转商品详情组件
            this.$router.push("/ProductInfo?pid="+lid);
        },
        //加载下一页的数据并且将数据显示在模块上
        loadMore(){
            //0.获取当前页码
            this.pno++;
            //1.创建变量url请求地址
            var url="http://127.0.0.1:3000";
            url+="/getProducts?pno="+this.pno;
            //2.发送ajax请求
            this.axios.get(url).then(result=>{
                //this.list=result.data;
                var rows=this.list.concat(result.data.data);
                this.list=rows;
            })
            //3.获取服务器返回结果保存data
            //this.list=result.data.data;
            //3.获取服务器返回结果 追加list
            //使用concat 拼接数组
            
        }
    }
}
</script>
<style scoped>
* { touch-action: pan-y; }
    .mui-icon-arrowleft{
        position:fixed;
        top:1rem;left:1rem;
        z-index:30;
    }
    .app-goodlist{
        display:flex; /*弹性布局 */
        flex-wrap:wrap; /*子元素换行 */
        justify-content:space-between; /*两端对齐 */
        padding:4px;
        margin-top:-1.3rem;
    }
    .app-goodlist .goods-item{
        width:49.8%;      /*商品信息元素宽度 */
        border:1px solid #ccc; /*边框 */
        margin:2px 0;   /*外补丁 */
        padding:2px;
        display:flex; /*子元素弹性布局 */
        flex-direction:column; /*排列方式：按列*/
        min-height:245px; /*最小高度 */
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
</style>