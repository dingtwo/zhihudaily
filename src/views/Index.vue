<template>
	<div id="app">
		<!-- 导航 -->
		<!--<nav-bar v-on:drawer="drawerHandle"></nav-bar>-->
		<nav-tem :isIndex="true">
			<span class="left" slot="left">
				<i class="menu"></i>
				<span class="title">首页</span>
			</span>
			<span slot="right" class="right">
				<i class="noti"></i>
				<i class="more"></i>
			</span>
		</nav-tem>
		<!-- 轮播图 -->
		<loop :stories="topStories"></loop>
		<!-- 内容列表 -->
		<table-view :dataSource="dataSource"></table-view>
		<!-- 抽屉 -->
		<drawer :drawer_show="drawer_show" :list="list"></drawer>

	</div>
</template>

<script>
	import NavTem from '@/components/NavTem'
	import Loop from '@/components/Loop'
	import Drawer from '@/components/Drawer'
	import TableView from '@/components/TableView'
 	import api from '@/common/api'

	export default {
		name: 'app',
		components: {
			NavTem,
			Drawer,
			Loop,
			TableView
		},
		data() {
		    return {
		        list: [],
				drawer_show: false,
				topStories: [],
				dataSource: {
		            sections: []
				}
			}
		},
		created() {

			api.getIndexData().then((res) => {console.log(res.data)
				this.topStories = res.data.top_stories;
				this.dataSource.sections.push({'header': '今日热闻', 'rows': res.data.stories})
				console.log(this.dataSource)
			}, (err) => console.log(err))
		},
		methods: {
		    drawerHandle: function () {
				this.drawer_show = !this.drawer_show;
			},
			hideDrawer: function () {
				this.drawer_show = false
			}
		}
	}
</script>

<style lang="less">
	@import "../../node_modules/element-ui/lib/theme-default/index.css";
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/*text-align: center;*/
		color: #2c3e50;
	}
	body {
		margin: 0;
		padding: 0;
	}
	#drawer{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 999;
		background-color: rgba(102, 102, 102, 0.4);
		.head{
			padding: 10px;
			background-color: #00a2ed;
			color: #ffffff;
			font-weight: bold;
			.login{
				span {
					font-size: 18px;
				}
			}
			.handle{
				margin-top: 20px;
				display: flex;
				justify-content: space-between;
				font-size: 15px;
			}
		}
	}
</style>
