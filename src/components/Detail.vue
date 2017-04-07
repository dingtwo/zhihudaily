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
					this.data = res.data
				},
				(err) => {
				    console.log(err)
				}
			)
		}
	}
</script>

<style lang="less" scoped>
.detail{
	margin-top: 64px;
}
</style>
