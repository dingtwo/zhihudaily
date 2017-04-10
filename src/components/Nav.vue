<template>
	<div>
		<nav v-show="isIndex">
			<i class="menu" @click="showDrawer"></i>
			<span class="index">首页</span>
			<span class="note">提醒</span>
			<i class="more"></i>
		</nav>
		<nav v-show="!isIndex">
			<i class="back"></i>
			<span>分享</span>
		</nav>
	</div>
</template>

<script>


	export default {
		name: 'nav-bar',
		components: {
		},
		data() {
		  	return {
		  	    isIndex: true
			}
		},
		methods: {
		    showDrawer: function () {
//				this.$root.drawer_show = !this.$root.drawer_show;
//				Vue.set(this.$root, drawer_show, )
				console.log(this.$root)
				this.$emit('drawer')
			}
		}
	}
</script>

<style scoped="">
	nav {
		display: flex;
		width: 100%;
		flex-direction: row;
		background-color: #00a2ed;
		height: 64px;
		align-items: center;
		justify-content: flex-start;
		z-index: 9;
		position: fixed;
		top: 0;
		/*display: none;*/
	}

	.menu {
		margin-left: 20px;
		width: 40px;
		height: 40px;
		background: url("../assets/menu.png") 0 no-repeat;
		/*flex:0 0 40px;*/
		flex-basis: 40px;
		margin-right: 5px;
	}
	.back{
		margin-left: 20px;
		width: 40px;
		height: 40px;
		background: url("../assets/menu.png") 0 no-repeat;
		/*flex:0 0 40px;*/
		flex-basis: 40px;
		margin-right: 5px;
	}

	.index {
		flex: 1;
		text-align: left;
	}

	.note {
		flex: 1;
		text-align: right;
	}

	.more {
		background: url("../assets/more.png") 0 0 no-repeat;
		width: 32px;
		height: 32px;
		flex: 0 0 40px;
		margin-left: 5px;
	}

</style>
