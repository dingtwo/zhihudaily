<template>
	<div>
		<nav-tem>
		<span slot="left" class="left">
			<i class="back" @click="$router.go(-1)"></i>
		</span>
		</nav-tem>
		<div class="detail" v-html="data.body"></div>
	</div>
</template>

<script>
	import NavTem from '@/components/NavTem'
	import api from '@/common/js/api'

	export default {
	    name: 'detail',
		data() {
	      	return {
	      	    data: {}
			}
		},
		components: {
	      	NavTem
		},
		created() {
			let lastID = this.$route.params.id;
			api.getDetail(lastID).then(
				(res) => {
					//图片走代理
					res.data.body = res.data.body.replace(/src="([^"]+)"/g, function (match, url) {
						let nurl = url.replace(/http(s?):\/\/pic/, "pic");
						let newUrl = 'src="https://images.weserv.nl/?url=' + nurl + '"';
						return newUrl
					});
//					res.data.body = res.data.body.replace(/<div class="img-place-holder">/g, `<div class="img-place-holder"><img src="${this.proxyImg(res.data.image)}">`)

					this.getStyleLink(res.data.css);
					this.data = res.data
					console.log(res.data)
				},
				(err) => {
					console.log(err)
				}
			)
		},
		mounted() {
		},
		beforeRouteLeave(to, from, next) {
	        this.removeStyleLink();
	      	next();
		},
		methods: {
	        getStyleLink(cssUrl) {
	            console.log(this)
				let css = document.querySelector('#css') || document.createElement('link');
				css.setAttribute('id', 'css');
				css.setAttribute('href', cssUrl);
				css.setAttribute('rel', 'stylesheet');
				document.querySelector('head').appendChild(css);
				css.onload = function () {
					console.log('加载完成')
				}
			},
			removeStyleLink() {
				let css = document.querySelector('#css')
				document.querySelector('head').removeChild(css);
			},
			proxyImg: function (str) {
				return str.replace(/^https?:\/\/(?=pic)/, 'https://images.weserv.nl/?url=');
			}
		}

	}
</script>

<style lang="less" scoped>
.detail{
	margin-top: 64px;
}
</style>
