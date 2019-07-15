<template>
    <div class="app">
        <nav class="mui-bar mui-bar-tab">
                <a class="mui-tab-item mui-active" href="#tabbar" @click="index">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label" >
                        首页
                    </span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-chat" @click="clas">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-topic"></span>
                    <span class="mui-tab-label" >    
                        专题
                    </span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-chat" @click="clas">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
                    <span class="mui-tab-label" > 
                        分类
                    </span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-contact" @click="shop">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">
                        0
                    </span>
                    </span>
                    <span class="mui-tab-label" >
                        购物车
                    </span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-map" @click="cent">
                    <span class=" mui-icon mui-icon-extra mui-icon-extra-addpeople"></span>
                    <span class="mui-tab-label"  >我的</span>
                </a>
            </nav> 
    </div>        
</template>
<script>

export default {
    methods:{
        cent(){  
            this.$router.push("/Center");
        },
        index(){
            this.$router.push("/Home")
        },
        shop(){
            this.$router.push("/Shopcart")
        },
        clas(){
            this.$router.push("/Productlist")
        }
    }
}
</script>
<style scoped>
    * { touch-action: pan-y; }
</style>