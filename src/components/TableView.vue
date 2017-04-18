<template>
	<!-- 仿tableView, headerView, footerView cell -->
	<div>
		<div class="section" v-for="section in dataSource.sections">
			<div class="header-view">
				<span class="header-title">{{ section.header }}</span>
			</div>
			<div class="row" v-for="row in section.rows">
				<router-link :to="{name: 'detail', params: {id: row.id}}">
					<div class="cell">
						<p>{{ row.title }}</p>
						<img v-if="row.images" :src="row.images[0] | proxyImg" alt="">
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	//dataSource数据结构
	/**
	 * {sections: [{header: "title" rows: []}, {header: '',rows: []}, {header: '',rows: []}]}
	 *
	 */
	export default {
		name: 'table-view',
		props: {
			dataSource: {
				type: Object
			}
		},
		methods: {
//		    push: function (id) {
//				this.$router.push({
//					name: 'detail',
//					params: {
//					    id:id
//					}
//				})
////				this.$emit('navigator')
//			}
		}
	}
</script>

<style lang="less" scoped>
	.section {
		background-color: #f3f3f3;
	}

	.section .header-view {
		font-size: 14px;
		color: #707070;
		padding-top: 10px;
		.header-title {
			margin-left: 15px;
		}
	}

	.cell {
		background-color: #ffffff;
		box-shadow: 1px 1px 3px #dddddd;
		margin: 10px;
		border-radius: 3px;
		color: #3c3c3c;
		padding: 15px;
		font-size: 18px;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
		p {
			margin: 0;
			padding: 0;
		}
		img {
			margin-left: 10px;
			//防止图片尺寸非正方形的变形
			/*flex-basis: 80px;*/
			flex: 0 0 80px;
			height: 80px;
		}
	}
	a{
		text-decoration: none;
	}
</style>
