<template>
    <div class="app-home">
				<header class="mui-bar mui-bar-nav">
					<img src="../../assets/headportrait345 (1).png"></img>
					<router-link to="Login" class="login" id="register">登录/注册</router-link>
				</header>
				<!--我的订单-->
        <div class="mui-content font">
							<div class="title">
								<a href="#">
									<span>我的订单</span>
									<span class="color">更多</span>
								</a>
							</div>
							<ul class="mui-table-view">
								<li class="mui-table-view-cell">
									<a class="mui-navigate-right">
										<span class="mui-icon-extra mui-icon-extra-gold"></span>
										<span class="color">预售订单</span>
									</a>
								</li>
								<li class="mui-table-view-cell">
									<a class="mui-navigate-right">
										<span class="mui-icon-extra mui-icon-extra-prech"></span>
										<span class="color">待付款</span>
									</a>
								</li>
								<li class="mui-table-view-cell">
									<a class="mui-navigate-right">
										<span class="mui-icon-extra mui-icon-extra-trend"></span>
										<span class="color">待发货</span>
									</a>
								</li>
								<li class="mui-table-view-cell">
									<a class="mui-navigate-right">
										<span class="mui-icon-extra mui-icon-extra-express"></span>
										<span class="color">已发货</span>
									</a>
								</li>
								<li class="mui-table-view-cell">
									<a class="mui-navigate-right">
										<span class="mui-icon-extra mui-icon-extra-xiaoshuo"></span>
										<span class="color">待评价</span>
									</a>
								</li>
								<li class="mui-table-view-cell">
									<a class="mui-navigate-right">
										<span class="mui-icon-extra mui-icon-extra-order"></span>
										<span class="color">退款/售后</span>
									</a>
								</li>
							</ul>
				</div>
				<!--我的特权-->
				<div class="list_title font">
					<span>我的特权</span>
				</div>
				<!--我的服务-->
				<div class="mui-content font" id="three">
							<div class="title">
								<span>我的服务</span>
							</div>
							<ul class="mui-table-view">
								<li class="mui-table-view-cell">
									<a class="mui-navigate-right">
										<span class="mui-icon-extra mui-icon-extra-peoples"></span>
										<span class="color">在线客服</span>
									</a>
								</li>
								<li class="mui-table-view-cell">
									<a class="mui-navigate-right">
										<span class="mui-icon-extra mui-icon-extra-gift"></span>
										<span class="color">优惠券</span>
									</a>
								</li>
								<li class="mui-table-view-cell">
									<a class="mui-navigate-right">
										<span class="mui-icon-extra mui-icon-extra-heart"></span>
										<span class="color">收藏夹</span>
									</a>
								</li>
								<li class="mui-table-view-cell">
									<a class="mui-navigate-right">
										<span class="mui-icon mui-icon-location"></span>
										<span class="color">地址管理</span>
									</a>
								</li>
								<li class="mui-table-view-cell">
									<a class="mui-navigate-right">
										<span class="mui-icon mui-icon-locked"></span>
										<span class="color">账户安全</span>
									</a>
								</li>
								<li class="mui-table-view-cell">
									<a class="mui-navigate-right">
										<span class="mui-icon mui-icon-help"></span>
										<span class="color">帮助中心</span>
									</a>
								</li>
							</ul>
				</div>
				<Footer></Footer>
    </div>
</template>
<script>
import Footer from "./Footer.vue"
export default {
	methods:{
		loadM(){
			var url="http://127.0.0.1:3000";
			url+="/judge"
			this.axios.get(url).then(result=>{
				
				var num=result.data.code;
				if(num==1){
					//console.log(result.data.data[0].uname)
					var reg=document.getElementById("register");
					var uname=result.data.data[0].uname;
					reg.innerHTML="欢迎回来："+uname;
				}
			})
		}
	},
	created(){
		this.loadM()
	},
    components:{
			Footer
		}
}
</script>
<style scoped>
		.mui-bar-nav{
			height:7rem;
			background:#d2ab44;
			text-align:left;
		}
		.mui-bar-nav img{
			padding:1rem;
			height:95%;
			vertical-align:middle;
		}
		.login{
			font-size:18px;
			color:#fff;
		}
		.mui-content{
			padding-top: 54px;
			text-align:left;
		}
		.title{
			display:flex;
			justify-content:space-between;
			background:#fff;
		}
		.title span{
			padding:1rem;
		}
		.font{
			font-size:14px;	
		}
		.color{
			opacity: .6;
		}
		.list_title{
			width:100%;height:2.5rem;
			background:#fff;
			line-height:2.5rem;
			text-align:left;
			padding-left:1rem;
			margin:.5rem 0;
		}
		#three{
			padding-top:0;
		}
</style>