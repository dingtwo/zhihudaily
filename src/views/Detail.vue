<template>
	<div class="detail">
		<div v-html="data.body"></div>
	</div>
</template>

<script>
	import api from '@/common/js/api'

	export default {
	    name: 'detail',
		data() {
	      	return {
	      	    data: {}
			}
		},
		created() {

		},
		// TODO: 缓存需要处理, 使用 keepalive 后路由id更换也面也不会重新刷新, 暂时在每次缓存页面激活的hook中重新请求数据
		activated: function () {
			console.log('重新激活')
			let lastID = this.$route.params.id;
			api.getDetail(lastID).then(
				(res) => {
					//图片走代理
					res.data.body = res.data.body.replace(/src="([^"]+)"/g, function (match, url) {
						let nurl = url.replace(/http(s?):\/\/pic/, "pic");
						let newUrl = 'src="https://images.weserv.nl/?url=' + nurl + '"';
						return newUrl
					});
					this.data = res.data
					this.getStyleLink(res.data.css);
				},
				(err) => {
					console.log(err)
				}
			)},
		mounted() {

		},
		methods: {
	        getStyleLink: (cssUrl) => {
	            console.log(this)
				let css = document.querySelector('#css') || document.createElement('link');
				css.setAttribute('id', 'css');
				css.setAttribute('href', cssUrl);
				css.setAttribute('rel', 'stylesheet');
				document.querySelector('head').appendChild(css);
			}
		}

	}
</script>

<style lang="less" scoped>
.detail{
	margin-top: 64px;
}
</style>
