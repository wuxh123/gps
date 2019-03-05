<!-- 底部 -->
<template>
        <nav class="mui-bar mui-bar-tab">
            <router-link :to="{name:'add_dev'}" class="mui-tab-item" href="#tabbar">
                <span class="mui-icon mui-icon-tianjia"></span>
                <span class="mui-tab-label">添加</span>
            </router-link>
            <router-link :to="{name:'home'}" class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-shanchu"></span>
                <span class="mui-tab-label">删除</span>
            </router-link>
        </nav>
</template>
<script>
export default {
	data(){	
		return{}	
	},
	created(){
	}
}
</script>

<style scoped>
	.mui-icon-tianjia{
		background: url('../../static/imgs/regist/tianjia.png') no-repeat center;
		background-size: 100%;
    }
    .mui-icon-shanchu{
		background: url('../../static/imgs/regist/shanchu.png') no-repeat center;
		background-size: 100%;
	}
</style>


