<!-- 底部 -->
<template>
<div>
	<nav class="mui-bar mui-bar-tab">
		<router-link :to="{name:'chat'}" class="mui-tab-item" href="#tabbar">
			<span class="mui-icon mui-icon-xiaoxi"><span class="mui-badge">9</span></span>
			<span class="mui-tab-label">消息</span>
		</router-link>
		<router-link :to="{name:'trailTimeScope'}" class="mui-tab-item" href="#tabbar-with-chat">
			<span class="mui-icon mui-icon-lishiguiji"></span>
			<span class="mui-tab-label">历史轨迹</span>
		</router-link>
		<router-link :to="{name:'callPhone'}" @click="onclick" class="mui-tab-item " href="#tabbar-with-contact">
			<span class="mui-icon mui-icon-dianhua"></span>
			<span class="mui-tab-label">电话</span>
		</router-link>
		<router-link :to="{name:'dingweimoshi'}" class="mui-tab-item"  href="#tabbar-with-contact">
			<span class="mui-icon mui-icon-dingweimoshi"></span>
			<span class="mui-tab-label">定位模式</span>
		</router-link>
		<router-link :to="{name:'watchMore'}" class="mui-tab-item" href="#tabbar-with-contact">
			<span class="mui-icon mui-icon-gengduo"></span>
			<span class="mui-tab-label">更多</span>
		</router-link>
	</nav>
</div>

</template>
<script>
export default {
	data(){	
		return{}	
	},
	created(){
	},methods:{
		onclick(){
			console.log(11111111111111111111111111111111111111)
		}
	}
}
</script>

<style scoped>
	.mui-icon-lishiguiji{
		background: url('../../static/imgs/base/lishiguiji.png') no-repeat center;
		background-size: 100%;
	}
	.mui-icon-dingweimoshi{
		background: url('../../static/imgs/base/dingweimoshi.png') no-repeat center;
		background-size: 100%;
	}
	.mui-icon-gengduo{
		background: url('../../static/imgs/base/gengduo.png') no-repeat center;
		background-size: 100%;
	}
	.mui-icon-xiaoxi{
		background: url('../../static/imgs/base/xiaoxi.png') no-repeat center;
		background-size: 100%;
	}
	.mui-icon-dianhua{
		background: url('../../static/imgs/base/dianhua.png') no-repeat center;
		background-size: 100%;
	}
	
</style>