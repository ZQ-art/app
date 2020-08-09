<template>
	<div class="edit">
		
	    <my-header title="个人资料" hasLeft="true" hasRight="true" rightTxt="二维码"/>
	    <div class="edit-warp">
			<div class="ava-box">
				<div class="avatar">
					<img src="../../static/img/u=5.jpg" alt="">
					<span class="iconfont icon-xiangji"></span>
					<input type="file" />
				</div>
				<p>点击更换头像</p>
			</div>
			<div class="edit-box">
				<div class="edit-item">
					<span class="label">学号</span>
					<span >20195524<span class="icon">></span></span>
				</div>
				<div class="edit-item">
					<span class="label">姓名</span>
					<span >OT.Ter<span class="icon">></span></span>
				</div>
				<div class="edit-item">
					<span class="label">性别</span>
					<span >女<span class="icon">></span></span>
				</div>
				<div class="edit-item">
					<span class="label">学校</span>
					<span >天津理工大学<span class="icon">></span></span>
				</div>
				<div class="edit-item">
					<span class="label">学院</span>
					<span >计算机科学与工程学院<span class="icon">></span></span>
				</div>
				<div class="edit-item">
					<span class="label">专业</span>
					<span >物联网工程<span class="icon">></span></span>
				</div>
				<div class="edit-item">
					<span class="label">QQ</span>
					<span >1369460359<span class="icon">></span></span>
				</div>
				<div class="edit-item">
					<span class="label">手机号码</span>
					<span >13589193462<span class="icon">></span></span>
				</div>
				
				<div class="edit-item">
					<span class="label">交易记录</span>
					<span ><span class="icon">></span></span>
				</div>
				<div class="edit-item">
					<span class="label">累计获赞量</span>
					<span >2161</span>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	
	import myHeader from '../../components/header/myHeader.vue'
	
	export default{
		components:{
			myHeader
		},
		methods:{
			toBack(){
				this.$router.push('/me');
			}
		}
	}
</script>

<style scoped>
	.edit{
		background-color: #FFFFFF;
	}
	.edit-warp{
		padding: 0 10px;
		box-sizing: border-box;
	}
	.ava-box{
		color: #CCCCCC;
		text-align: center;
		padding: 20px;
	}
	.avatar{
		position: relative;
	}
	.avatar img{
		height: 100px;
		width: 100px;
		border-radius: 50%;
		margin-bottom: 16px;
		opacity: .7;
	
	}
	.avatar .iconfont{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		font-size: 26px;
		color: #FFFFF;
	}
	.avatar input{
		position: absolute;
		left: 50%;
		top: 50%;
		width: 50%;
		transform: translate(-50%,-50%);
		opacity: 0;
	}
	.edit-box{
		border-top: 1px #292831 solid;
		color: #7C7C7C;
	}
	.edit-item{
		display: flex;
		justify-content: space-between;
		line-height: 60px;
		margin-left: 13px;
	}
	.edit-item .label{
		color: #000000;
		font-weight: 600;
	}
	.edit-item .icon{
		margin-left: 10px;
	}
</style>
