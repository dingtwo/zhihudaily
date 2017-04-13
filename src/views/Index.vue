)<template>
	<div id="app">
		<!-- 导航 -->
		<!--<nav-bar v-on:drawer="drawerHandle"></nav-bar>-->
		<nav-tem :isIndex="true">
			<span class="left" slot="left">
				<i class="menu" @click="showDrawer"></i>
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
		<div class="spinner" v-show="loading">
			<div class="double-bounce1"></div>
			<div class="double-bounce2"></div>
		</div>
		<!-- 抽屉 -->
		<drawer :drawer_show="drawer_show" :themes="themes" @hideDrawer="hideDrawer"></drawer>

	</div>
</template>

<script>
	import NavTem from '@/components/NavTem'
	import Loop from '@/components/Loop'
	import Drawer from '@/components/Drawer'
	import TableView from '@/components/TableView'
	import api from '@/common/js/api'
	import DateFormat from '@/common/js/DateFormat'

	 // TODO: 放到组件中

	//作为一个对象的w和h属性返回视口的尺寸
	function getViewportSize(w) {
		//使用指定的窗口， 如果不带参数则使用当前窗口
		w = w || window;
		//除了IE8及更早的版本以外，其他浏览器都能用
		if (w.innerWidth != null)
			return {w: w.innerWidth, h: w.innerHeight};
		//对标准模式下的IE（或任意浏览器）
		var d = w.document;
		if (document.compatMode == "CSS1Compat")
			return {w: d.documentElement.clientWidth, h: d.documentElement.clientHeight};
		//对怪异模式下的浏览器
		return {w: d.body.clientWidth, h: d.body.clientHeight};
	}
	//检测滚动条是否滚动到页面底部
	function isScrollToPageBottom() {
		//文档高度
		var documentHeight = document.documentElement.offsetHeight;
		var viewPortHeight = getViewportSize().h;
		var scrollHeight = window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop || 0;

		return documentHeight - viewPortHeight - scrollHeight < 20;
	}

	export default {
		name: 'index',
		components: {
			NavTem,
			Drawer,
			Loop,
			TableView
		},
		data() {
			return {
				themes: [],
				drawer_show: false,
				lastDate: '',
				loading: false,
				topStories: [],
				dataSource: {
					sections: []
				}
			}
		},
		created() {
			this.getIndexData();
		},
		methods: {
			getIndexData() {
				api.getIndexData().then((res) => {
					console.log(res.data)
					this.topStories = res.data.top_stories;
					this.dataSource.sections.push({'header': '今日热闻', 'rows': res.data.stories})
					this.lastDate = res.data.date;
				}, (err) => console.log(err))
			},
			getMore(date) {
				this.loading = true;
				api.getMore(date).then(
					(res) => {
						this.dataSource.sections.push({
							'header': DateFormat.time2Title(res.data.date),
							'rows': res.data.stories
						})
						this.lastDate = res.data.date;
						this.loading = false;
						console.log(this.dataSource)
					},
					(err) => {
						console.log(err)
						this.loading = false;
						// TODO: show错误原因
					}
				)
			},
			getThemes() {
			  	return api.getThemes().then(
					(res) => {
					    console.log(res.data)
					    this.themes = res.data.others
					},
					(err) => {
					    console.log(err)
					}
				)
			},
			showDrawer() {
				this.getThemes().then(
					() => {
						this.drawer_show = true;
					}
				);

			},
			hideDrawer() {
			  	this.drawer_show = false;
			},
			onScroll(event) {
//				console.log(event);
				console.log(document.body.scrollTop + 60);
				console.log(document.documentElement.clientHeight)
				console.log(this.lastDate)
//				if ((window.document.body.offsetHeight + window.document.body.scrollTop) + 100 > window.document.body.scrollHeight && !this.loading) {
				if (isScrollToPageBottom() && !this.loading) {
					console.log('到底了')
					this.getMore(this.lastDate);
				}
			}
		},

		beforeRouteEnter(to, from, next)
		{
			if (from.name === 'detail') {
				// 使用保存的高度
			} else {
				// 高度直接为0
			}
			next(vm => {
				window.addEventListener('scroll', vm.onScroll, false);
//				console.log(vm)
			});

		}
		,
		beforeRouteLeave(to, from, next)
		{
			window.removeEventListener('scroll', this.onScroll, false);
			next();
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



	.spinner {
		width: 40px;
		height: 40px;

		position: relative;
		margin: 100px auto;
	}

	.double-bounce1, .double-bounce2 {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: #333;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;

		-webkit-animation: sk-bounce 2.0s infinite ease-in-out;
		animation: sk-bounce 2.0s infinite ease-in-out;
	}

	.double-bounce2 {
		-webkit-animation-delay: -1.0s;
		animation-delay: -1.0s;
	}

	@-webkit-keyframes sk-bounce {
		0%, 100% {
			-webkit-transform: scale(0.0)
		}
		50% {
			-webkit-transform: scale(1.0)
		}
	}

	@keyframes sk-bounce {
		0%, 100% {
			transform: scale(0.0);
			-webkit-transform: scale(0.0);
		}
		50% {
			transform: scale(1.0);
			-webkit-transform: scale(1.0);
		}
	}
</style>
