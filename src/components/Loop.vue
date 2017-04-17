<template>
	<div class="loop">
		<el-carousel :interval="3000" height="300px" indicator-position="none">
			<el-carousel-item v-for="(item, index) in stories" v-bind:key="index">
				<!--<img :src="item.image | proxyImg" alt="item.id">-->
				<div class="img" :style="{backgroundImage: 'url('+proxyImg(item['image'])+')'}"></div>
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


			}
		},
		components: {
		    'el-carousel': Carousel,
			'el-carousel-item': CarouselItem
		},
		created() {
			console.log(this.stories)
//			this.url = ;
		},
		methods: {
		 	proxyImg: function (str) {
				return str.replace(/^https?:\/\/(?=pic)/, 'https://images.weserv.nl/?url=');
			}
		},
		mounted() {

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
		/*width: 100%;*/
		/*height: 200px;*/
	}
	.el-carousel__item p{
		position: absolute;
		bottom: 10px;
		left: 0;
		width: 100%;
		margin: 10px;
		color: #ffffff;
		font-size: 20px;
		/*line-height: 200px;*/
	}
	.img{
		width: 100%;
		height: 300px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		/*background-*/
		/*background-size: 100% 200%;*/
	}

</style>
