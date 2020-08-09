<template>
	<div class="tab-bar">
	
		<div class="item" @click="changeTab(0)">
			<router-link to="/index" tag="span" :class="tabIndex==0?'active':''">首页</router-link>
		</div>
		<div class="item" @click="changeTab(1)">
			<router-link to="/follow" tag="span" :class="tabIndex==1?'active':''">代取</router-link>
		</div>
		<div class="item" @click="changeTab(2)">
			<router-link to="/index" tag="span" :class="tabIndex==2?'active':''">
				<img class="dy-btn"   src="../../static/img/排行榜.png">
			</router-link>
		</div>
		<div class="item" @click="changeTab(3)">
			<router-link to="/index" tag="span" :class="tabIndex==3?'active':''">消息</router-link>
		</div>
		<div class="item" @click="changeTab(4)">
			<router-link to="/sign" tag="span" :class="tabIndex==4?'active':''">我的</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		
		data(){
			return{
				tabIndex:0
			}
		},
		methods:{
			changeTab(index){
				this.tabIndex = index
				console.log(this.tabIndex);
			}
		}
	}
</script>

<style scoped>
	 .tab-bar{
		 height: 50px;
		 line-height: 50px;
		 width: 100%;
		 background: #F5F7FF;
		 position: fixed;
		 bottom: 0;
		 left: 0;
		 color:  #b2c3c0;
		 font-size: 16px;
		 display: flex;
		 justify-items: center;
		 z-index: 9;
	 }
	 
	 .tab-bar .item{
		 flex: 1;
		 text-align: center;
	 }
	
	 .tab-bar .item .active{
		 color: #76b5b3;
	 }
	 .tab-bar .item .dy-btn{
		 width: 65px;
		 height:45px;
		 padding: 2px;
		 border-radius: 50%;
	 }
		 
</style>
