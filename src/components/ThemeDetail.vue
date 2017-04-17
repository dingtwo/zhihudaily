<template>
	<div>
		<div class="content">
			<div class="img" :style="{backgroundImage: 'url('+proxyImg(theme.background)}+')'"></div>
		</div>
	</div>
</template>

<script>
	export default {
	    name: 'theme-detail',
		props: {
	        theme: {
	            type: Object,
			}
		},
		methods: {
			proxyImg: function (str) {
			    console.log(str)
				return str.replace(/^https?:\/\/(?=p)/, 'https://images.weserv.nl/?url=');
			},
		}
	}
</script>

<style scoped lang="less">
	.content {
		display: flex;
		flex-direction: column;
		.img {
			width: 100%;
			height: 200px;
		}
	}
</style>
