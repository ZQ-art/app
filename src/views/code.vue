<template>
	<div class="sign">
		<div class="sign-header">
			<span class="icon">←</span>
			<span>帮助</span>
		</div>
		<div class="sign-content">
			<div class="des">
				<h2>请输入验证码</h2>
				<p>验证码已通过短信发送至+86 13589193467</p>
			</div>
			
			<div class="sign-box">
				<div class="inp">
					<input @input="changeCode"   type="text" v-model="code"  class="inp-controll" placeholder="请输入验证码">
				</div>
				<div class="sele">
					{{time}}
				</div>
			</div>
			
			<div class="code-btn">
				<button :disabled="disabled" :class="[btnBg?'active':'']"  class="load-btn"><div v-if="loading"  class="loads"></div>登录</button>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				telErea:'',
				time:60,
				code:'',
				disabled:true,
				btnBg:false,
				loading:false
			}
		},
		created(){
			this.getCode()
		},
		methods:{
			getCode(){
				this.timer()
				this.codes = '1234'
			},
			
			changeCode(e){
				this.code = e.target.value;
				if(this.code==this.codes){
					this.disabled = false;
					this.btnBg = true
					this.loading = true
				}else{
					console.log('验证码错误')
				}
			},
			//倒计时
			timer(){
				if(this.time>0){
					this.time--;
					setTimeout(this.timer,1000);
				}else{
					console.log(11)
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
		margin-bottom: 15px;
	}
	.des h2{
		font-size: 24px;
		font-weight: bold;
		color: #000000;
		text-align: center;
	}
	.des p{
		line-height: 40px;
		color:#999999;
		font-size: 14px;
	}
	.des, .not-sign p a{
		color: #628DB8;
	/* 	padding: 0 5px; */
	}
	.sign-box{
		display: flex;
		height: 50px;
		align-items: center;
		background-color: #f9f9f9;
		margin-top: 12px ;
		justify-content: space-between;
	}
	.sele{
		margin-right: 15px;
		color: #CCCCCC;
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
	.load-btn{
		display: flex;
		justify-content: center;
	}
	.loads{
		width: 14px;
		height: 14px;
		border: 3px solid #ffffff;
		border-bottom: 3px #cccccc solid;
		border-radius: 50%;
		animation: load 1s infinite linear;
		margin-right: 7px;
	}
	/* loading动画 */
	@keyframes load{
		from{
			transform: rotate(0deg);
		}
		to{
			transform: rotate(360deg);
		}
	}
	
</style>
