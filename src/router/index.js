import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			// 暂时使用重定向解决, 考虑其他方案
			redirect: to => {
				return '/themes/1'
			}
		},
		{
			path: '/themes/:id',
			name: 'content',
			component: Content
		},
		{
			path: '/detail/:id',
			name: 'detail',
			component: Detail
		}
	]
})
