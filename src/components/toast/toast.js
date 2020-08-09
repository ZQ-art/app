//引入vue
import Vue from 'vue'
//引入自定义的弹出框组件
import toast from './toast.vue'
//实例化
let Toast = Vue.extend(toast)
let instance
//设置时间 一个定时器
let timer = null
//设置参数
//注意此处是options！ 若写成option，不会报错，但无法实现正确的显示
let toastMsg = (options)=>{
	if(!instance){
		//创建实例
		instance = new Toast()
		//挂载到页面上
		document.body.append(instance.$mount().$el)
	}
	//给一个默认的时间
	instance.duration = 2000;//即2秒钟
	if(typeof options ==='string'){
		instance.message = options
	}else if(typeof options ==='object'){
		instance.type = options.type
		instance.massage = options.message
		instance.duration = options.duration || 2000
	}else{
		return 
	}
	
	instance.show = true
	timer = setTimeout(()=>{
		instance.show = false
		clearTimeout(timer)
		timer = null
	},instance.duration)
}

//将对象导出
export default toastMsg
