import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Content',
			component: Content
		},
		{
			path: '/detail/:id',
			name: 'detail',
			component: Detail
		}
	]
})
