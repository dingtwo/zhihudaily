import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Content from '@/components/Content'
import Detail from '@/views/Detail'

Vue.use(Router)

export default new Router({
	mode: 'history',
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
	],
	// TODO: 框架提供了保存滚动位置的方法, 还没搞明白, 浏览器本身支持, 移动端需要处理
	// scrollBehavior (to, from, savedPosition) {
	// 	console.log(savedPosition)
	// 	if (from.name === 'detail' && savedPosition) {
	// 		console.log(savedPosition)
	// 		return savedPosition
	// 	} else {
	// 		return {x: 0, y: 0}
	// 	}
	// }
})
