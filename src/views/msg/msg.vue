<template>
	<div class="message">
		<my-header title="消息" hasRight="true" rightTxt="发起聊天"  />
		<div class="top-bar">
			<div class="left">
				<span class="iconfont icon-shezhi"></span>
			</div>
			<div class="middle">
				
				<div class="item" @click="changeTop(0)"><span :class="topIndex==0?'active':''">消息列表</span></div>
				<div class="item" @click="changeTop(1)"><span :class="topIndex==1?'active':''">我的好友</span></div>
				<!-- <div class="item" @click="changeTop(2)"><span :class="topIndex==2?'active':''">推荐</span></div> -->
			</div>
			<div class="right">
				<span class="iconfont icon-sousuo"></span>
			</div>
		</div>	
		<div class="msg-warp">
			<div class="mag-nav">
			
			</div>
			<div class="msg-ab">
				<img src="../../static/img/n=4.jpg" alt="" />
			</div>
			<div class="down">
				<div>我的消息</div>
				<div><button class="btn">点击刷新</button></div>
			</div>
			<div class="msg-list-box">
				<div class="msg-list">
					<img src="../../static/img/n=3.jpg" alt="">
					<div class="user-des">
						<div class="top">
							<span>friend 1</span>
							<span>22：35</span>
						</div>
						<div class="top top-msg">
							<span>在不在不~</span>
							<span class="no-see"></span>	
						</div>
					</div>
					
				</div>
			</div>
			<div class="msg-list-box">
				<div class="msg-list">
					<img src="../../static/img/n=3.jpg" alt="">
					<div class="user-des">
						<div class="top">
							<span>friend 2</span>
							<span>20：15</span>
						</div>
						<div class="top top-msg">
							<span>Hello</span>
							<span class="no-see"></span>	
						</div>
					</div>
					
				</div>
			</div>
			<div class="msg-list-box">
				<div class="msg-list">
					<img src="../../static/img/n=3.jpg" alt="">
					<div class="user-des">
						<div class="top">
							<span>friend 3</span>
							<span>21：56</span>
						</div>
						<div class="top top-msg">
							<span>okk</span>
							<span class="no-see"></span>	
						</div>
					</div>
					
				</div>
			</div>
			<div class="msg-list-box">
				<div class="msg-list">
					<img src="../../static/img/n=3.jpg" alt="">
					<div class="user-des">
						<div class="top">
							<span>friend 4</span>
							<span>14：29</span>
						</div>
						<div class="top top-msg">
							<span>hi~</span>
							<span class="no-see"></span>	
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import myHeader from '../../components/header/myHeader.vue'
export default{
		name:'TopBar',
		data(){
			return {
				topIndex:2
			}
		},
		
		methods:{
			changeTop(index){
				this.topIndex = index;
			}
		}
	
	}
</script>

<style scoped>
	.mag-nav{
		padding: 0px 0px;
		display: flex;
		justify-content: space-between;
		
	}
	.msg-warp{
		padding: 0 20px;
		color: #000000;
		background-color: #f0f0f0;
	}
	
	.mag-nav-item{
		text-align: center;
		width: 80px;
	}
	
	.msg-ab{
		padding: 20px 0;
		
		border-bottom: 1px #242630 dotted;
	}
	.msg-ab img{
		height: 120px;
		width: 100%;
		border-radius: 10px;
	}
	.down{
		padding: 20px 0;
		color: #536333;
		font-weight: 600;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px #242630 dotted;
	}
	.down .btn{
		padding: 4px 25px;
		border: none;
		background-color: #face15;
		color: #ffffff;
		border-radius: 2px;
		box-shadow: 5px 5px 5px #FFFFB6;
	}
	.msg-list-box{
		padding-top: 30px;
	
	}
	.msg-list{
		display: flex;
		padding: 10px 0;
	}
	.msg-list img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.user-des{
		flex:1;
		height: 60px;
		border-bottom: #D1D9E1 solid;
	}
	.user-des .top{
		font-size: 14px;
		margin-left: 10px;
		display: flex;
		justify-content: space-between;
		line-height: 25px;
	}
	.top-msg{
		color: #666666;
		align-items: center;
	}
	.no-see{
		width: 8px;
		height: 8px;
		border-radius: 50%;
		border: #face15;
	}
	
	
	
	
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
	/* 点击效果 */
	.middle .item span{
		/* 设置上下的距离 */
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
