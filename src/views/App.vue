<template>
	<!--//TODO: 主页缓存, 详情页id不同刷新-->

	<keep-alive>
		<router-view></router-view>
	</keep-alive>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>

</style>
