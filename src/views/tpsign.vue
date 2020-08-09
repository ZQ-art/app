<template>
	<div class="sign">
		<div class="sign-header">
			<router-link to="/sign" tag="span"  class="icon"><</router-link>
			<span>帮助</span>
		</div>
		<div class="sign-content">
			<div class="des">
				<h2>学号登录</h2>
			
			</div>
			<div class="sign-box">
				<div class="sele">
				
				</div>
				<div class="inp">
					<input @keyup="loginAction"  type="text" v-model="phone"  class="inp-controll" placeholder="请输入学号">
				</div>
			</div>
			<div class="sign-box">
			
				<div class="inp">
					<input  @keyup="loginAction" type="password" v-model="password"  class="inp-controll" placeholder="请输入密码">
				</div>
			</div>
			<div class="not-sign">
		
			</div>
			<div class="code-btn">
				<button  @click="loginAction"  :disabled="disabled" :class="[btnBg?'active':'']">登录</button>
			</div>
			<div class="other">
				<span>忘记了？<a href="">找回密码</a></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				telErea:'',
				phone:"",
				password:"",
				disabled:true,
				btnBg:false
			}
		},
		methods:{
			loginAction(){
				
				if(this.phone==""){
				
				this.$toast('学号不能为空')
			
				}else if(this.password ==""){
				
					this.$toast({
						message:'密码不能为空',
						type:'error',
						duration:3000
					})
					return
				}else{
				
					this.disabled = false;
					this.btnBg = true
					
				}
			}
		}
	}
</script>

<style scoped>
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
	.des{
		margin-bottom: 30px;
	}
	.des h2{
		font-size: 24px;
		font-weight: bold;
		color: #000000;
		
	}
	.des p{
		line-height: 50px;
		color:#666666;
	}
	.des, .not-sign p a{
		color: #628DB8;
	
	}
	.sign-box{
		display: flex;
		height: 50px;
		align-items: center;
		background-color: #f9f9f9;
		margin-top: 12px ;
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
		color: #F9F9F9;
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
</style>
