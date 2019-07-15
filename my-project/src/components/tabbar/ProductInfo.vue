<template>
    <div class="app-home" id="app">
        <!--轮播图 mint-ui -->
        <div class="top">
            <img :src="'http://127.0.0.1:3000/'+ info.md"></img>
        </div>
        <!--商品名称-->
        <div class="dt-section">
            <div class="info">
                <div class="taglist">
                    <span>2018新品</span>
                </div>
                <p class="title">{{info.title}}</p>
                <p class="price">￥{{info.price}}</p>
            </div>
            <div class="comment">
                <img src="../../assets/xin.png"></img>
                <span>收藏</span>
            </div>    
        </div>
        <div class="mc-servicePolicy">
            <span>·骆驼自营爆品</span>
            <span>·7天无忧退换货</span>
            <span>·满59元包邮</span>
        </div>
        <div class="choose_style">货号：C8S276514</div>
        <div class="choose_style">请选择款式、数量</div>
        <div class="choose_style">用户晒单/0条</div>
        <div class="image">
            <img src="../../assets/ecd90f45.jpg"></img>
            <img src="../../assets/3d2b2097-8abf7f.jpg"></img>
            <img src="../../assets/dc1a4d86-9c20-4497-a2cb-ab9b264abae2.jpg"></img>
            <img src="../../assets/d67eaa9d-fac2-45d8-a5ea-1816a2d00cf8.jpg"></img>
            <img src="../../assets/2bdb5f1d-b760-4dba-8dc8-4b223f49bc98.jpg"></img>
            <img src="../../assets/073779dd-acd9-4d83-88f0-2d561872792f.jpg"></img>
        </div>
        <!--底部选项卡-->
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active one" href="#tabbar">
				<span class="mui-icon mui-icon-chat"></span>
			</a>
			<a class="mui-tab-item two add" href="#tabbar-with-chat">
				<span class="mui-tab-label">立即购买</span>
			</a>
			<a class="mui-tab-item two shop" href="#tabbar-with-contact">
				<span class="mui-tab-label"  @click="show">加入购物袋</span>
			</a>
		</nav>
        <!-- 购物选项-->
        <div class="select" v-show="hide">
            <div class="select_top">
                <span class="mui-icon mui-icon-closeempty simple" @click="close"></span>
                <div class="info-con">
                    <img :src="'http://127.0.0.1:3000/'+ info.md"></img>
                    <div>
                        <p class="price">¥ {{info.price}}</p>
                        <p>已选：请选择</p>
                    </div>
                </div>
            </div>
            <div>颜色</div>
            <div>
                <span class="wid bor" @click="white" id="s1">白色</span>
                <span class="wid bor" @click="blank">宝蓝</span>
            </div>
            <div>尺码</div>
            <div>
                <span class="widt bor" @click="m" id="mm">M</span>
                <span class="widt bor" @click="l">L</span>
                <span class="widt bor" @click="xl">XL</span>
                <span class="widt bor" @click="xxl">XXL</span>
            </div>
            <div>数量</div>
            <div class="mui-numbox">
                <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
				<input class="mui-input-numbox" type="number" value="1" v-model="val"/>
				<button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
            </div>
            <div class="mui-card-footer">
                <mt-button class="btn" type="danger" size="small" @click="addcart">加入购物车</mt-button>
            </div>  
        </div>
        <span class="mui-icon mui-icon-arrowleft" @click="skip"></span>
    </div>

</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
             navlist:[],//轮播列表
             info:{md:"img/product/245.jpg"},//创建对象保存商品信息
             pid:this.$route.query.pid,
             hide:false,
             val:1,
             color:"白色",
             size:"M"
        }
    },
    created(){
        this.handleImage();
        this.findGoodInfo();
    },
    methods:{
        skip(){
            this.$router.push("/Home")
        },
        close(){
            this.hide=false
        },
        white(e){
            var s1=document.getElementById("s1");
            var s2=s1.nextElementSibling;
            this.color="白色";
            e.target.classList.add("act");
            s2.className="wid bor"
        },
        blank(e){
            var s1=document.getElementById("s1");
            var s2=s1.nextElementSibling;
            this.color="黑色";
            e.target.classList.add("act");
            s1.className="wid bor"
        },
        m(e){
            var mm=document.getElementById("mm");
            var ll=mm.nextElementSibling;
            var xxl=ll.nextElementSibling;
            var xxxl=xxl.nextElementSibling;
            this.size="M";
            e.target.classList.add("act");
            ll.className="wid bor";
            xxl.className="wid bor";
            xxxl.className="wid bor";
        },
        l(e){
            var mm=document.getElementById("mm");
            var ll=mm.nextElementSibling;
            var xxl=ll.nextElementSibling;
            var xxxl=xxl.nextElementSibling;
            this.size="L";
            e.target.classList.add("act");
            mm.className="wid bor";
            xxl.className="wid bor";
            xxxl.className="wid bor";
        },
        xl(e){
            var mm=document.getElementById("mm");
            var ll=mm.nextElementSibling;
            var xxl=ll.nextElementSibling;
            var xxxl=xxl.nextElementSibling;
            this.size="XL";
            e.target.classList.add("act");
            mm.className="wid bor";
            ll.className="wid bor";
            xxxl.className="wid bor";
        },
        xxl(e){
            var mm=document.getElementById("mm");
            var ll=mm.nextElementSibling;
            var xxl=ll.nextElementSibling;
            var xxxl=xxl.nextElementSibling;
            this.size="XXL";
            e.target.classList.add("act");
            mm.className="wid bor";
            ll.className="wid bor";
            xxl.className="wid bor";
        },
        addcart(){
        //脚手架  GoodInfo.vue
        //console.log(123);
        //0:为按钮绑定点击事件 
        //1:获取二个参数 pid price  uid=1
        var pid = this.pid;
        var price = this.info.price;
        var color=this.color;
        var size=this.size;
        var title=this.info.title;
        //var uid = 1;
        //console.log(pid+"_"+price+"_"+uid);
        //2:发送ajax请示
        var url = "http://127.0.0.1:3000/";
        url+="addcart?pid="+pid;
        url+="&price="+price;
       // url+="&uid="+uid;
        url+="&color="+color;
        url+="&size="+size;
        url+="&title="+title;
        this.axios.get(url).then(result=>{
           if(result.data.code == 1){
             Toast("添加成功");
           }else{
             Toast("请先登录");
           }
           //this.$store.commit("increment");
        })
        //3:将商品添加至购物车
        //4:显示提示框 
         
        },
        goodAdd(){
            this.val++;
        },
        goodSub(){
            if(this.val > 1){
            this.val--;
            }
        },
        //购物选项
        show(){
            this.hide=true;
        },
        //查询商品信息
        findGoodInfo(){
            var url="http://127.0.0.1:3000";
            url+="/findProduct?pid="+this.pid;
            //console.log(url)
            this.axios.get(url).then(result=>{
               //console.log(result.data.data[0]);
                this.info=result.data.data[0];
            })
        },
        //加载轮播图数据
        handleImage(){
            //1.发送ajax获取轮播数据
            var url="http://127.0.0.1:3000";
            url+="/pimglist";
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
    .mui-icon-arrowleft{
        position:fixed;
        top:1.5rem;left:1rem;
    }
    /******top*/
   .top{
       width:100%;height:16rem;
        margin-top:-56px;
   }
   .top img{
       width:inherit;
       height:inherit;
   }
    /****商品名称****/
    .dt-section{
        display:flex;
        justify-content:space-between;
        background:#fff;
        border:1px solid rgba(74,74,74,.1);
        height:11rem;
        padding:1rem;
    }
    .info{
        width:75%;
        text-align:left;
        border-right:1px solid rgba(74,74,74,.1);
    }
    .comment{
        width:25%;
        text-align:center;
    }
    .comment img{
        display:block;
        width:30%;
        margin:2.5rem 0 0 2rem;
    }
    .comment span{
        font-size:16px;
        opacity:.3;
        margin-left:.3rem;
    }
    .taglist span{
        border:1px solid #f00;
        font-size:12px;
        color:#f00;
    }
    .title{
        font-size:13px;
        color:#000;
        margin-top:.8rem;
    }
    .price{
        font-size:18px;
        color:#ea7d51;
        margin-top:1rem;
    }
    .mc-servicePolicy{
        width:100%;
        height:3rem;
        background:#eee;
        color:#9b9b9b;
        text-align: center;
        font-size: .9rem;
        display:flex;
        justify-content:space-around;
        align-items:center;
        border:1px solid rgba(74,74,74,.1);
    }
    .choose_style{
        width:100%;
        height:3rem;
        padding:1rem;
        background:#fff;
        border:1px solid #eaeaea;
        text-align:left;
        font-size:14px;
        color:#000;
        margin-bottom:.3rem;
    }
    .image img{
        width:100%;
    }
    /***底部选项卡****/
    .mui-bar-tab{
        display:flex;
        justify-content:space-between;
        padding:.1rem;
    }
    .mui-bar-tab .one{
        width:19%;
        background:#fff;
        line-height:3rem;
    }
    .mui-bar-tab .two{
        width:39%;
        line-height:3rem;
    }
    .mui-bar-tab.mui-bar-tab .add{
        background-color: #9c937a;
        color:#fff;
        font-size:14px;
    }
    .mui-bar-tab .shop{
        background-color: #d2ab44;
        color:#fff;
         font-size:14px;
    }
    /****购物选项****/
    .select{
        width:100%;height:20rem;
        position:fixed;
        bottom:0;
        background:#fff;
        z-index:30;
        font-size:1rem;
        text-align:left;
        padding:1rem;
    }
    .select_top{
        display:flex;
        justify-content:space-between;
        width:100%;height:7rem;
    }
    .select_top span{
        width:10%;
    }
    .select_top div{
        width:90%;
    }
     .info-con{
         display:flex;
         justify-content:space-between;
     }
     .info-con>img{
         width:50%;
     }
     .info-con>div{
         width:50%;
         text-align:left;
     }
     .price{
         margin-top:2rem;
     }
    .wid{
        display:inline-block;
        width:3rem;height:1.5rem;
        line-height:1.5rem;
        text-align:center;
    } 
    .widt{
        display:inline-block;
        width:3rem;height:1.5rem;
        line-height:1.5rem;
        text-align:center;
    }
    .bor{
        border: 1px solid hsla(0,0%,56%,.3);
        color: #9b9b9b;
    }
    .act{
        background:#ea7d51
    }
    .btn{
        width:100%;
        height:2.3rem;
    }
    div.mui-card-footer{
        padding:0;
    }
</style>