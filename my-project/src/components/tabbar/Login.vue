<template>
    <div class="app-home">
            <header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">登录</h1>
		</header>
		<div class="">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input name="uname" v-model="uname" id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input name="upwd" v-model="upwd" id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
			<form class="mui-input-group">
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						自动登录
						<div id="autoLogin" class="mui-switch">
							<div class="mui-switch-handle"></div>
						</div>
					</li>
				</ul>
			</form>
			<div class="mui-content-padded">
				<button id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary" @click="btnLogin">登录</button>
				<div class="link-area"><a id='reg'>注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
				</div>
			</div>
			<div class="mui-content-padded oauth-area">

			</div>
			<span class="mui-icon mui-icon-arrowleft" @click="skip"></span>
		</div>
    </div>
</template>
<script>
//引入mint-ui Toast 局部使用
import {Toast} from "mint-ui" 
export default {
    data(){
        return {
            uname:"",
            upwd:""
        }
    },
    methods:{
		skip(){
            this.$router.push("/Home")
        },
        btnLogin(){
            //1.获取用户输入用户名和密码
            var u=this.uname;
            var p=this.upwd;
            //2.创建正则表达式验证用户名和密码格式是否正确
             var reg=/^[a-z0-9_]{3,8}$/i;
            if(!reg.test(u)){
                //提示消息不是
                Toast("用户名格式不正确,请检查")
            }
            if(!reg.test(p)){
                Toast("密码格式不正确,请检查")
            }
            //3.发送ajax
            var url="http://127.0.0.1:3000"
            url+="/login?uname="+u+"&upwd="+p;
            this.axios.get(url).then(result=>{
                if(result.data.code==1){
                   Toast("登录成功");
				   this.$router.push("/Center");
				   console.log(result.data.data);
               }else{
                   Toast("用户名或密码错误")
               }
            })
        }
    }
}
</script>
<style scoped>
* { touch-action: pan-y; }
			.mui-icon-arrowleft{
       			position:fixed;
        		top:.6rem;left:1rem;
				z-index:30;
    		}
            .area {
				margin: 20px auto 0px auto;
			}
			.mui-input-group {
				margin-top: 10px;
			}
			.mui-input-group:first-child {
				margin-top: 20px;
			}
			.mui-input-group label {
				width: 22%;
			}
			.mui-input-row label~input,
			.mui-input-row label~select,
			.mui-input-row label~textarea {
				width: 78%;
			}
			.mui-checkbox input[type=checkbox],
			.mui-radio input[type=radio] {
				top: 6px;
			}
			.mui-content-padded {
				margin-top: 25px;
			}
			.mui-btn {
				padding: 10px;
			}
			.link-area {
				display: block;
				margin-top: 25px;
				text-align: center;
			}
			.spliter {
				color: #bbb;
				padding: 0px 8px;
			}
			.oauth-area {
				position: absolute;
				bottom: 20px;
				left: 0px;
				text-align: center;
				width: 100%;
				padding: 0px;
				margin: 0px;
			}
			.oauth-area .oauth-btn {
				display: inline-block;
				width: 50px;
				height: 50px;
				background-size: 30px 30px;
				background-position: center center;
				background-repeat: no-repeat;
				margin: 0px 20px;
				/*-webkit-filter: grayscale(100%); */
				border: solid 1px #ddd;
				border-radius: 25px;
			}
			.oauth-area .oauth-btn:active {
				border: solid 1px #aaa;
			}
			.oauth-area .oauth-btn.disabled {
				background-color: #ddd;
			}
</style>