<template>
	<div class="top-bar">
		<div class="left">
			<span class="iconfont icon-qianbao"></span>
		</div>
		<div class="middle">
			<!-- 勿漏span后面的冒号 以及双引号的对应 -->
			<div class="item" @click="changeTop(0)"><span :class="topIndex==0?'active':''">有偿代取</span></div>
			<div class="item" @click="changeTop(1)"><span :class="topIndex==1?'active':''">悬赏代取</span></div>
			<!-- <div class="item" @click="changeTop(2)"><span :class="topIndex==2?'active':''">推荐</span></div> -->
		</div>
		<div class="right">
			<span class="iconfont icon-jia"></span>
		</div>
	</div>
</template>

<script>
	//必不可少的步骤
	export default{
		name:'TopBar',
		data(){
			return {
				topIndex:2
			}
		},
		//写一下点击事件
		methods:{
			changeTop(index){
				this.topIndex = index;
			}
		}
	
	}
		
</script>

<!-- 写一下顶部栏的样式 -->
<style scoped>
	.top-bar{
			background-color: #ffa500;
			width: 100%;
			height: 60px;
		
			font-size: 18px;
			color: #CCCCCC;
			padding: 20px;
			display: flex;
			box-sizing: border-box;
	}
	.left, .right{
		width: 20%;
	}
	.iconfont{
		font-size: 24px;
		
	}
	.middle{
		display: flex;
		justify-items: center;
	}
	.middle{
		width: 65%;
		display: flex;
		justify-items: center;
	}
	.middle .item{
		flex: 1;
		text-align: center;
	}

	.middle .item span{
		
		padding: 10px;
	}
	.middle .item .active{
		color: #FFFFFF;
		border-bottom: 3px solid #FFFFFF;
	}
	.right{
		text-align: right;
	}
	
</style>
