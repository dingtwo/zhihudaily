<template>
	<div class="content">
		<loop :stories="top_stories" v-cloak></loop>
		<table-view :dataSource="data_source"></table-view>
	</div>
</template>

<script>
	import Loop from '@/components/Loop'
	import TableView from '@/components/TableView'
	import axios from 'axios'
	export default {
		name: 'content',
		components: {
			Loop, TableView
		},
		data () {
			return {
				top_stories: [],
				data_source: {
					sections: []
				}
			}
		},
		created() {
			axios.get('/zhihu/news/latest').then(
				(res) => {
					console.log(res.data)
					this.top_stories = res.data.top_stories;
					this.data_source['sections'].push({
						header: {title: '今日热闻'},
						rows: res.data.stories
					})
				},
				(err) => {
					console.log(err)
				}
			)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
	/*margin-top: 64px;*/
}
</style>
