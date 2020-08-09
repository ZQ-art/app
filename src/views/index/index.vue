<template>
	<div class="index">
		
		<!-- <span class="iconfont icon-sousuo"></span> -->
		<!-- 使用组件 -->
		<top-bar></top-bar>
		<router-view />
	</div>
</template>

<script>
// 将顶部导航栏组件引入index界面
import TopBar from '../../components/index/TopBar.vue'
export default{
	data(){
		return {
			
		}
	},
	//注册组件
	//一定注意括号的对应
	components:{
		TopBar
	}
}
	
</script>

<style>
</style>
