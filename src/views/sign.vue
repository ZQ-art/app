<template>
	<div class="sign">
		<div class="sign-header">
			<span class="icon">×</span>
		
		</div>
		<div class="sign-content">
			<div class="des">
				<h2>优购 Goods</h2>
				<p>为您提供最优质的购物体验！</p>
			
			</div>
			<div class="sign-box">
				<div class="sele">
					<select class="sele-controll"  v-model="telErea">
						<option value="">+86</option>
					</select>
				</div>
				<div class="inp">
					<input  v-model="phone" @input="changeTel"   type="text" class="inp-controll" placeholder="请输入手机号码">
				</div>
			</div>
			<div class="not-sign">
				<p>用户手机号绑定</p>
			</div>
			<div class="code-btn">
				<button :disabled="disabled" :class="[btnBg?'active':'']"   @click="getCode">获取短信验证码</button>
			</div>
			<div class="other">
				
				<router-link tag="a" to="/tpsign">学号登录</router-link>
				<span @click="show">其他方式登录</span>
			</div>
		</div>
		<transition name="up">
		<div class="mask" v-if="showMask">
			<div class="oauth">
				<ul >
					<li class="oauth-item" >更多</li>
					<li class="oauth-item">QQ登录</li>
					<li class="oauth-item">微信登录</li>
					<li class="oauth-item">微博登录</li>
					<li  @click="close"  class="oauth-item">取消</li>
				</ul>
			</div>
		</div>
		</transition>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				telErea:'',
				showMask:false,
				disabled:true,
				btnBg:false,
				phone:''
			}
		},
		methods:{
			getCode(){
				this.$router.push('/code');
			},
			show(){
				this.showMask = true
			},
			close(){
				this.showMask = false
			},
			changeTel(e){
				this.phone = e.target.value;
				var regtel = /^1[345789]{1}\d{9}$/;
				if(regtel.test(this.phone)){
					this.btnBg = true;
					this.disabled = false
				}else{
					this.btnBg = false;
					this.disabled = true
				}
			}
		}
	}
</script>

<style scoped>

	ul li{
		list-style-type: none;
	}
	.sign{
		padding: 30px;
	}
	.sign-header{
		display: flex;
		justify-content: space-between;
	}
	.sign-header .icon{
		font-size: 30px;
	}
	.sign-content{
		padding: 40px 10px;
	}
	.des h2{
		font-size: 24px;
		font-weight: bold;
		text-align: center;
	}
	.des p{
		line-height: 50px;
		color:#666666;
		text-align: center;
	}
	.des p a{
		color: #628DB8;
		padding: 0 5px;
	}
	.sign-box{
		display: flex;
		height: 50px;
		align-items: center;
		background-color: #f9f9f9;
	}
	.sele-controll{
		background-color: #f9f9f9;
		height: 36px;
		font-weight: bold;
		margin-left: 5px;
		/* 无边框 */
		border: none;
	}
	.inp-controll{
		height: 36px;
		background-color: #f9f9f9;
		border: none;
		width: 90%;
		margin-left:10px;
	}
	input{
		/* 光标颜色 */
		caret-color: #fe2c55;
	}
	input::-webkit-input-placeholder{
		color: #CCCCCC;
	}
	.not-sign p{
		color: #cccccc;
		font-size: 14px;
		margin-top: 10px;
	}
	/* 按钮 */
	.code-btn button{
		margin:20px 0;
		width: 100%;
		padding: 15px 0;
		border: none;
		color: #FFFFFF;
	}	
	.code-btn .active{
		color: #FFFFFF;
		background-color: #FE2C55;
	}
	.other{
		display: flex;
		/* 布局 两边 */
		justify-content: space-between;
	}
	.other a{
		color: #628DB8;
	}
	.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0,0,0,.4);
	}
	.oauth{
		height: 48%;
		width: 100%;
		position: absolute;
		bottom: 0;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		background-color: #FFFFFF;
		/* 居中显示 */
		text-align: center;
	}
	/* 列表固定高度 */
	.oauth-item{
		border-bottom: 1px #f5f5f5 solid;
		line-height: 63px;
	}
	.up-enter-active, .up-leave-active {
	  transition: all .5s;
	}
	.up-enter, .up-leave-to {
	  opacity: 1;
	  transform: translateY(100%);
	}
</style>
