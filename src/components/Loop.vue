<template>
	<div class="loop">
		<el-carousel :interval="3000" height="200px" indicator-position="none">
			<el-carousel-item v-for="item in stories" v-bind:key="item">
				<!--<img :src="item.image | proxyImg" alt="item.id">-->
				<div class="img"></div>
				<p>{{ item.title }}</p>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	import { Carousel, CarouselItem } from 'element-ui'
	import axios from 'axios'
	export default{
		name: 'loop',
		props: {
		  	stories: {
		  	    type: Array
			}
		},
		data() {
			return {
				imgs: [
					{
						url: 'https://unsplash.it/500/400',
						alt: '文字'
					},
					{
						url: 'https://placehold.it/500x400?text=二',
						alt: '文字'
					},
					{
						url: 'https://placehold.it/500x400?text=三',
						alt: '文字'
					},
					{
						url: 'https://placehold.it/500x400?text=four',
						alt: '文字'
					},
					{
						url: 'https://placehold.it/500x400?text=five',
						alt: '文字'
					}
				]
			}
		},
		components: {
		    'el-carousel': Carousel,
			'el-carousel-item': CarouselItem
		},
		created() {
			console.log(this.stories)
		},
		mounted() {
		    console.log(this.$el)
			let _this = this;
			this.$el.querySelectorAll('.img').forEach(
				(item, index) => {
				    console.log(_this.stories[index]['image']);
				    let url = _this.stories[index]['image'].replace(/^https?:\/\/pic/, 'https://images.weserv.nl/?url=pic')
					console.log(url);
					_this.$nextTick(function () {
						item.style.backgroundImage = `url("${url}")`;

					})
				}
			)
		}

	}

</script>

<style  scoped>

	/*@import '../../node_modules/bootstrap/dist/css/bootstrap.css';*/
	@import "../../node_modules/element-ui/lib/theme-default/index.css";

	.loop{
		margin-top: 64px;
	}
	.el-carousel__item img {
		width: 100%;
		/*height: 200px;*/
	}
	.el-carousel__item p{
		margin: 0;
		line-height: 200px;
	}
	.img{
		width: 100%;
		height: 200px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		/*background-*/
		/*background-size: 100% 200%;*/
	}

</style>
