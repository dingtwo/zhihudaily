<template>
	<div id="drawer" v-show="drawer_show">
		<div class="drawer-wrap">

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
			<ul class="theme-list">
				<router-link to="/">
					<li class="home">🏠&nbsp&nbsp&nbsp首页</li>
				</router-link>
				<router-link v-for="theme in themes" :to="{ name: 'theme', params: { id: theme.id }}">
					<li>
						<span>{{theme.name}}</span><span class="icon" :class="{add: true, to: false}"></span>
					</li>
				</router-link>
			</ul>

		</div>
		<div class="drawer-mask" @click="hideClick"></div>

	</div>
</template>

<script>

	export default {
		name: 'drawer',
		props: {
			drawer_show: {
				type: Boolean,
				default: false
			},
			themes: {
				type: Array
			}
		},
		data() {
			return {
				show: false
			}
		},
		created() {

		},
//		computed: {
//			show: function () {
//				return this.$props.drawer_show
//			}
//		},
		components: {},
		methods: {
			hideClick() {
				this.$emit('hideDrawer')
			}
		}
	}
</script>

<style lang="less">
	#drawer {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		.drawer-wrap {
			flex: 2;
			background-color: #ffffff;
			.head {
				padding: 10px;
				background-color: #00a2ed;
				color: #ffffff;
				font-weight: bold;

				.login {
					span {
						font-size: 18px;
					}
				}
				.handle {
					margin-top: 20px;
					display: flex;
					justify-content: space-between;
					font-size: 15px;
				}

			}
			li{
				padding: 12px;
				font-weight: 500;
				color: #1F1F1F;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.icon{
					flex-basis: 40px;
				}
				.add::after{
					content: '+';
					color: #D0D0D0;
				}
				.to::after{
					content: '>';
					color: #D0D0D0;
				}
			}
			.home{
				background-color: #F0F0F0;
				color: #00A2ED;
			}
		}
		.drawer-mask {
			flex: 1;
			background-color: rgba(54, 54, 54, 0.69);
		}

	}
</style>
