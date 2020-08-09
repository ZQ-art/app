// 引入一下
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from './views/Home.vue'
//在路由中配置一下Home
const router = new Router({
	routes:[
		//定义跳转/到index下
		{
			path:'/',
			redirect:'index'
		},
		{
			path:'/',
			name:'home',
			component:Home,
			children:[
				{
					path:'/index',
					name:'index',
					component: () => import('./views/index/index.vue'),
					//在index下写一个子路由
					children:[
						{
							path:'/index',
							name:'index',
							component: () => import('./components/index/VideoList.vue'),
						}
					]
				},
				{
					path:'/follow',
					name:'follow',
					component:()=>import('./views/follow/follow.vue')
				},
				{
					path:'/me',
					name:'me',
					component:()=>import('./views/me/me.vue')
				},
				{
					path:'/msg',
					name:'msg',
					component:()=>import('./views/msg/msg.vue')
				}
			]
		},
		{
			path:'/sign',
			name:'sign',
			component:()=>import('./views/sign.vue')
		},
		{
			path:'/tpsign',
			name:'tpsign',
			component:()=>import('./views/tpsign.vue')
		},
		{
			path:'/code',
			name:'code',
			component:()=>import('./views/code.vue')
		},
		{
			path:'/toast',
			name:'toast',
			component:()=>import('./components/toast/toast.vue')
		},
		{
			path:'/edit',
			name:'edit',
			component:()=>import('./views/me/edit.vue')
		}
		
	]
})
//导出路由
export default router