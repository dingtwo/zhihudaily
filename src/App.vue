<template>
	<div id="app">
		<!-- 导航 -->
		<nav-bar v-on:drawer="drawerHandle"></nav-bar>
		<!-- 内容 -->
		<router-view></router-view>
		<!-- 抽屉 -->
		<drawer :drawer_show="drawer_show"></drawer>
	</div>
</template>

<script>
	import Nav from '@/components/Nav'
	import Drawer from '@/components/Drawer'
	import {Menu, MenuItem, MenuItemGroup, Row, Col} from 'element-ui'
	import axios from 'axios'
	export default {
		name: 'app',
		components: {
			'nav-bar': Nav,
			'el-menu': Menu,
			'el-menu-item-group': MenuItemGroup,
			'el-menu-item': MenuItem,
			'el-row': Row,
			'el-col': Col,
			Drawer
		},
		data() {
		    return {
		        list: [],
				drawer_show: false
			}
		},
		created() {
		    axios.get('/zhihu/themes').then(
				(res) => {
				    console.log(res.data)
					this.list = res.data.others
				},
				(err) => {
				    console.log(err)
				}
			)
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
	@import "../node_modules/element-ui/lib/theme-default/index.css";
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
