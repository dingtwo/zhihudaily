<template>
	<div class="detail">
		<div v-html="data.body"></div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
	    name: 'detail',
		data() {
	      	return {
	      	    data: {}
			}
		},
		created() {
	        axios.get(`/zhihu/news/${this.$route.params.id}`).then(
				(res) => {
				    console.log(res.data)
					//图片走代理
					console.log('跳转了')
					res.data.body = res.data.body.replace(/src="([^"]+)"/g,  function (match, url) {
						let nurl = url.replace(/http(s?):\/\/pic/, "pic");
						let newUrl = 'src="https://images.weserv.nl/?url=' + nurl+'"';
						return newUrl
					});
					 this.data = res.data
//					console.log(this.data.body)
				},
				(err) => {
				    console.log(err)
				}
			)
		},
		mounted() {

		}

	}
</script>

<style lang="less" scoped>
.detail{
	margin-top: 64px;
}
</style>
