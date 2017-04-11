import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Content from '@/components/Content'
import Detail from '@/views/Detail'

Vue.use(Router)

export default new Router({
	//重新配置路由, 相同nav的页面放在一个根路由下
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index
		},
		{
			path: "/themes/:id",
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
