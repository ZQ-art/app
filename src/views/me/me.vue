<template>
	<div class="me">
		<div class="me-top" :style="bgPic">
			<div class="menu-box">
				<div class="menu-icon"></div>
			</div>
		</div>
		<div class="me-warp">
			<div class="me-content">
				<div class="info">
					<img src="../../static/img/u=7.jpg" alt="">
					<button class="btn">My Goods</button>
					<button class="btn">我的收藏</button>
				</div>
				<div class="des">
					<h2>OT.Ter</h2>
					<span>id：20195524</span>
					<p>质量很好，非常实用，节省空间，商家服务态度好! 安利一波~</p>
					<img src="../../static/img/book2.jpg"  alt=""/>
				</div>
				<div class="user-tag">
					<span>宿舍用品</span>
					<span>创意书架</span>
					<span>+添加颜色、价格等标签</span>
				</div>
				<div class="user-tag2">
					<span>获赞 <a>25</a></span>
				
				</div>
				<div class="me-ab">
					查看更多
				</div>
			</div>
			<div class="me-tab">
				<div class="me-navbar">
					<div class="item " @click="changeTab(0)" :class="indexTab==0?'active':''">share1</div>
					<div class="item" @click="changeTab(1)" :class="indexTab==1?'active':''">share2</div>
					<div class="item" @click="changeTab(2)" :class="indexTab==2?'active':''">share3</div>
				</div>
				<div class="tab-wrap">
					<div class="tab-con" v-show="indexTab===0">
					
						<div class="tab-img">
							
							<img src="../../static/img/book3.jpg" alt="">
							<img src="../../static/img/book4.jpg" alt="">
							<img src="../../static/img/book1.jpg" alt="">
						</div>		
					</div>
					<div class="tab-con" v-show="indexTab===1">2</div>
					<div class="tab-con" v-show="indexTab===2">3</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				bgPic:{
					backgroundImage:'url('+require('../../static/img/f.jpg')+')',
					backgroundRepeat:'no-repeat',
					backgroundSize:'100% 100%',
					opacity:.6
				},
				indexTab:0
			}
		},
		methods:{
			changeTab(index){
				this.indexTab = index
			}
		}
	}
</script>

<style scoped>
	.me{
		position: relative;
	}
	.me-top{
		height: 160px;
		display: flex;
		justify-content: flex-end;
		padding: 20px;
	}
	.menu-box{
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: rgba(0,0,0, .3);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.menu-icon{
		background: #FFFFFF;
		border-top: 2px #ffffff solid;
		border-bottom: 2px #FFFFFF solid;
		background-clip: content-box;
		width: 20px;
		height: 2px;
		padding: 5px 0;
	}
	.me-tab{
		
		background: #F7dfd4;
	}
	.me-warp{
		position: absolute;
		top: 140px;
		height: 100%;
		width: 100%;
		background-color:#0000FF;
		color: #000000;
	}
	.me-content{
		padding: 0 17px 30px 17px;
		background: #FFFFDF;
		
	}
	.info{
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* padding-bottom: 20px; */
	}
	.info img{
		height: 90px;
		width: 90px;
		border-radius: 50%;
		margin-right: 20px;
		padding: 10px 0 10px 10px;
	}
	/* 按钮*/
	.info button{
		height: 40px;
		padding: 0 20px;
		background-color: #393842;
		border: none;
		color: #FFFFFF;
		opacity: .7;
	}
	.des{
		padding:20px 20px ;
		background: #faebc1;
		border-radius: 5%;
		opacity: .8;
	}
	.des h2{
		font-size: 24px;
		font-weight: bold;
		
	}
	.des span{
		padding: 10px 0 15px 0;
		display: block;
		/* border-radius: 50%; */
		
	}
	.des p{
		line-height: 24px;
		
	}
	.des img{
		height: 200px;
		width: 300px;
	}
	.user-tag span{
		font-size: 14px;
		color: #3f4234;
		margin-right: 5px;
		background: rgba(225, 225, 225, 10.6);
		padding: 1px 8px;
		/* border-radius: 5px; */
	}
	.user-tag2 {
		padding: 20px 0;
	}
	.user-tag2 span{
		font-size: 14px;
		margin-right: 15px;
		/* margin-top: 50px; */
		color: #3f4234;
		
	}
	.user-tag2 a{
		/* font-size: 18px; */
		margin-right: 15px;
		color: #5c262a;
		
	}
	.me-ab{
		/* background: #fae7d7; */
		background: rgba(0,0,0, .6);
		text-align: center;
		padding: 10px 0;
		border-radius: 4px;
		color: #FFFFFF;
	}
	.tab-wrap{
		height: 300px;
		
	}
	.me-navbar{
		display: flex;
		padding: 0 20px;
		justify-content: space-between;
		align-items: center;
	}
	.me-navbar .item{
		padding: 10px 25px;
		color: #a2aab0;
	}

	.me-navbar .active{
		border-bottom: 2px #ffdf0e solid;
		color: #3e3e3b;
		font-size: 18px;
		font-weight: 600;
	}
	.tab-img img{
		width: 33.3%;
		
	}
</style>
