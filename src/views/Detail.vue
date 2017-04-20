<template>
	<div class="scrollWrapper">
		<nav-tem>
		<span slot="left" class="left">
			<i class="back" @click="$router.go(-1)"></i>
		</span>
			<span slot="right" class="right">

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
				data: {},
				pro: null
			}
		},
		components: {
			NavTem
		},
		created() {
			let lastID = this.$route.params.id;
			this.pro = api.getDetail(lastID).then(
				(res) => {
					//图片走代理
					res.data.body = res.data.body.replace(/src="([^"]+)"/g, function (match, url) {
						let nurl = url.replace(/http(s?):\/\/pic/, "pic");
						let newUrl = 'src="https://images.weserv.nl/?url=' + nurl + '"';
						return newUrl
					});
//					res.data.body = res.data.body.replace(/<div class="img-place-holder">/g, `<div class="img-place-holder"><img src="${this.proxyImg(res.data.image)}">`)
					console.log(res.data)
					this.getStyleLink(res.data.css);
					this.data = res.data
				},
				(err) => {
					console.log(err)
				}
			)

		},
		mounted() {
			//
//			this.$nextTick(function() {
//			    console.log(this)
//			    console.log(this.$el.getElementsByClassName('img-place-holder')[0])
//			})
			let _this = this;
			// 通过v-html加载的html不确定何时会load完成, 所以在事件队列的最后获取
			console.log(!!this.data.image)
			console.log(this.data)
			// 由于异步ajax此时不确定是否已结束, 因此必须在结束后处理dom
			this.pro.then(
				() => {
					setTimeout(function () {
						console.log("事件结束")
						if (!!_this.data.image) {
							let placeholder1 = _this.$el.getElementsByClassName('img-place-holder')[0]
							console.log(placeholder1)
							placeholder1.style.backgroundImage = "url(" + _this.proxyImg(_this.data.image) + ")";
						}
					}, 0)
				}
			)


		},
		beforeRouteLeave(to, from, next) {
			this.removeStyleLink();
			next();
		},
		methods: {
			getStyleLink(cssUrl) {
				let css = document.querySelector('#css') || document.createElement('link');
				css.setAttribute('id', 'css');
				css.setAttribute('href', cssUrl);
				css.setAttribute('rel', 'stylesheet');
				document.querySelector('head').appendChild(css);

			},
			removeStyleLink() {
				let css = document.querySelector('#css')
				css && document.querySelector('head').removeChild(css);
			},
			proxyImg: function (str) {
				return str.replace(/^https?:\/\/(?=pic)/, 'https://images.weserv.nl/?url=');
			}
		}

	}
</script>

<style lang="less">
	.detail {
		margin-top: 60px;

	}

	.img-place-holder {
		background-size: cover;
		background-position: center;
	}
</style>
