<template>
	<div id="app">
		<nav-bar v-on:drawer="drawerHandle"></nav-bar>
		<div id="drawer" v-show="drawer_show" @click="hideDrawer">
			<div class="drawer_wrap"><el-row>
				<el-col :span="15">
					<div class="head">
						<div class="login"><i></i><span>请登录</span></div>
						<div class="handle">
							<div>
								<i>✨</i>
								<span>我的收藏</span>
							</div>
							<div>
								<i>✨</i>
								<span>离线下载</span>
							</div>
						</div>
					</div>
					<el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
						<el-menu-item-group title="首页">
							<el-menu-item v-for="(item, index) in list" index="'index'" :key="index">{{item.name}}<i class="el-icon-message"></i></el-menu-item>
						</el-menu-item-group>

					</el-menu>
				</el-col>
			</el-row></div>

		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import Nav from '@/components/Nav'
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
			'el-col': Col
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
