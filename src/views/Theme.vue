<template>
	<div class="scrollWrapper">>
		<!--主题{{this.$route.params.id}}-->
		<nav-tem>
			<span class="left" slot="left">
				<i class="menu" @click="showDrawer"></i>
				<span class="title">{{theme.name}}</span>
			</span>
			<span slot="right" class="right">
				<!--<i>关注</i>-->
				<span>关注</span>
			</span>
		</nav-tem>


		<!--<div class="sk-circle" v-if="loading">-->
			<!--<div class="sk-circle1 sk-child"></div>-->
			<!--<div class="sk-circle2 sk-child"></div>-->
			<!--<div class="sk-circle3 sk-child"></div>-->
			<!--<div class="sk-circle4 sk-child"></div>-->
			<!--<div class="sk-circle5 sk-child"></div>-->
			<!--<div class="sk-circle6 sk-child"></div>-->
			<!--<div class="sk-circle7 sk-child"></div>-->
			<!--<div class="sk-circle8 sk-child"></div>-->
			<!--<div class="sk-circle9 sk-child"></div>-->
			<!--<div class="sk-circle10 sk-child"></div>-->
			<!--<div class="sk-circle11 sk-child"></div>-->
			<!--<div class="sk-circle12 sk-child"></div>-->
		<!--</div>-->

		<div class="content">
			<div class="img" :style="{backgroundImage: 'url('+proxyImg(theme.background)+')'}"></div>
			<table-view :dataSource="dataSource"></table-view>
		</div>
		<!-- 抽屉 -->
		<drawer :drawer_show="drawer_show" :themes="themes" @hideDrawer="hideDrawer"></drawer>


	</div>
</template>

<script>
	import NavTem from '@/components/NavTem'
	import Drawer from '@/components/Drawer'
	import TableView from '@/components/TableView'

	import api from '@/common/js/api'

	export default {
		name: 'theme',
		props: {
//		    themes: {
//		        type: Array
//			}
		},
		data() {
		  	return {
		  	    theme: {},
				drawer_show: false,
				themes: [],
				loading: true,
				dataSource: {
		  	        sections: []
				}
			}
		},
		created() {
			this.getData();
		},
		computed: {

		},
		beforeRouteUpdate (to, from, next) {
			// 在当前路由改变，但是该组件被复用时调用
			// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
			// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
			// 可以访问组件实例 `this`
			console.log('全体注意, 要跳转了');
			this.drawer_show = false;
			this.dataSource.sections = [];
			this.getData(to.path.substr(8));
			next();
		},
		methods: {
			proxyImg: function (str) {
				return str.replace(/^https?:\/\/(?=p)/, 'https://images.weserv.nl/?url=');
			},
		    getData(id) {
		      	 id = id || this.$route.params.id;
				this.loading = true;
				api.getThemeDetail(id).then((res) => {
					console.log(res);
					this.theme = res.data
					this.loading = false
					this.dataSource.sections.push({
						"header": "主编",
						"rows": res.data.stories,
						editors: res.data.editors
					})
//				console.log(this.dataSource)
				})
			},
		    // TODO: 这个地方应该放在子组件内
			showDrawer() {
				let themes = sessionStorage.getItem('themes')
				if (themes) {
					this.themes = JSON.parse(themes);
				} else {
					api.getThemes().then(
						(res) => {
//							console.log(res.data)
							this.themes = res.data.others
							sessionStorage.setItem('themes', JSON.stringify(res.data.others));
							this.drawer_show = true;

						},
						(err) => {
							console.log(err)
						}
					)
				}
				this.drawer_show = true;

			},
			hideDrawer() {
				this.drawer_show = false;
			},
		},
		components: {
		    NavTem,
			Drawer,
			TableView
		}
	}
</script>

<style scoped lang="less">
	.sk-circle {
		margin: 100px auto;
		width: 40px;
		height: 40px;
		position: relative;
	}

	.sk-circle .sk-child {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}

	.sk-circle .sk-child:before {
		content: '';
		display: block;
		margin: 0 auto;
		width: 15%;
		height: 15%;
		background-color: #333;
		border-radius: 100%;
		-webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
		animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
	}

	.sk-circle .sk-circle2 {
		-webkit-transform: rotate(30deg);
		-ms-transform: rotate(30deg);
		transform: rotate(30deg);
	}

	.sk-circle .sk-circle3 {
		-webkit-transform: rotate(60deg);
		-ms-transform: rotate(60deg);
		transform: rotate(60deg);
	}

	.sk-circle .sk-circle4 {
		-webkit-transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		transform: rotate(90deg);
	}

	.sk-circle .sk-circle5 {
		-webkit-transform: rotate(120deg);
		-ms-transform: rotate(120deg);
		transform: rotate(120deg);
	}

	.sk-circle .sk-circle6 {
		-webkit-transform: rotate(150deg);
		-ms-transform: rotate(150deg);
		transform: rotate(150deg);
	}

	.sk-circle .sk-circle7 {
		-webkit-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		transform: rotate(180deg);
	}

	.sk-circle .sk-circle8 {
		-webkit-transform: rotate(210deg);
		-ms-transform: rotate(210deg);
		transform: rotate(210deg);
	}

	.sk-circle .sk-circle9 {
		-webkit-transform: rotate(240deg);
		-ms-transform: rotate(240deg);
		transform: rotate(240deg);
	}

	.sk-circle .sk-circle10 {
		-webkit-transform: rotate(270deg);
		-ms-transform: rotate(270deg);
		transform: rotate(270deg);
	}

	.sk-circle .sk-circle11 {
		-webkit-transform: rotate(300deg);
		-ms-transform: rotate(300deg);
		transform: rotate(300deg);
	}

	.sk-circle .sk-circle12 {
		-webkit-transform: rotate(330deg);
		-ms-transform: rotate(330deg);
		transform: rotate(330deg);
	}

	.sk-circle .sk-circle2:before {
		-webkit-animation-delay: -1.1s;
		animation-delay: -1.1s;
	}

	.sk-circle .sk-circle3:before {
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
	}

	.sk-circle .sk-circle4:before {
		-webkit-animation-delay: -0.9s;
		animation-delay: -0.9s;
	}

	.sk-circle .sk-circle5:before {
		-webkit-animation-delay: -0.8s;
		animation-delay: -0.8s;
	}

	.sk-circle .sk-circle6:before {
		-webkit-animation-delay: -0.7s;
		animation-delay: -0.7s;
	}

	.sk-circle .sk-circle7:before {
		-webkit-animation-delay: -0.6s;
		animation-delay: -0.6s;
	}

	.sk-circle .sk-circle8:before {
		-webkit-animation-delay: -0.5s;
		animation-delay: -0.5s;
	}

	.sk-circle .sk-circle9:before {
		-webkit-animation-delay: -0.4s;
		animation-delay: -0.4s;
	}

	.sk-circle .sk-circle10:before {
		-webkit-animation-delay: -0.3s;
		animation-delay: -0.3s;
	}

	.sk-circle .sk-circle11:before {
		-webkit-animation-delay: -0.2s;
		animation-delay: -0.2s;
	}

	.sk-circle .sk-circle12:before {
		-webkit-animation-delay: -0.1s;
		animation-delay: -0.1s;
	}

	@-webkit-keyframes sk-circleBounceDelay {
		0%, 80%, 100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}

	@keyframes sk-circleBounceDelay {
		0%, 80%, 100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}

	.content {
		margin-top: 60px;
		display: flex;
		flex-direction: column;
		.img {
			width: 100%;
			height: 300px;
			background-size: cover;
		}
	}

</style>
