<template>
	<div class="toast-box">
		<transition name="toast">
		<div class="toast"  v-show="show"    :class="type">
			<p>{{message}}</p>
		</div>
		</transition>
	</div>
</template>

<script>
	//消息提示
export default{
	data(){
		return{
			message:'1223333',
			show:true,
			type:''
		}
	}
}
</script>

<style>
	.toast{
		position: fixed;
		left: 50%;
		top: 30%;
		transform: translate(-50%,-50%);
		background-color: rgba(0,0,0,.5);
		color: #FFFFFF;
		text-align: center;
		border-radius: 4px;
		font-size: 14px;
		line-height: 18px;
		padding: 6px 10px;
	}
	.sucess{
		background-color: rgba(0,0,0,.5);
	}
	.error{
		background-color: #FE2C55;
	}
	.toast-enter-to, .toast-leave{
		opacity: 1;
	}
	.toast-enter-active, .toast-leave-active{
		transition: all ease 0.5s;
		
	}
	.toast-enter, .toast-enter-to{
		opacity: 0;
	}
</style>
