import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index'
import index_left1 from '@/page/index_left1'
import index_left2 from '@/page/index_left2'
import index_left3 from '@/page/index_left3'
import login from '@/page/login'
import echars1 from '@/page/echars1'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/index',
			name: 'index',
			component: index,
			redirect: '/index_left1',
			children: [{
					path: '/index_left1',
					name: 'index_left1',
					component: index_left1
				},
				{
					path: '/index_left2',
					name: 'index_left2',
					component: index_left2
				},
				{
					path:'/index_left3',
					name:'/index_left3',
					component:index_left3
				},
				{
					path:'/echars1',
					name:'/echars1',
					component:echars1
				}
			]
		},{
		path:'/',
		name:'login',
		component:login
		}
	

	]
})