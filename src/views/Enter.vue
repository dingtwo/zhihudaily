<template>
	<!-- 入口 -->
	<div class="scrollWrapper">
		<!-- 子路由 -->
		<router-view></router-view>

		<!-- 抽屉 -->
		<drawer></drawer>
	</div>
</template>

<script>
	import Drawer from '@/components/Drawer'
	import api from '@/common/js/api'
	export default {
		name: "enter",
		data() {
			return {
//				drawer_show: false,
				themes: []
			}
		},
		components: {
			Drawer
		},
		methods: {
		}
	}
</script>

<style>

</style>
