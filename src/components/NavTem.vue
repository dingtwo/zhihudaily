<template>
	<nav id="nav">
		<!--<i :class="{menu: isIndex, back: !isIndex}"></i>-->
		<!-- 日报名或用户名 -->
		<slot name="left"></slot>
		<!-- 右侧按钮, 一个或多个 -->
		<slot name="right"></slot>
	</nav>
</template>

<script>
export default {
    name: 'nav-tem',
	props: {
        isIndex: {
            type: Boolean,
			default: true
		}
	}
}
</script>

<style lang="less" scoped>
	nav {
		display: flex;
		width: 100%;
		flex-direction: row;
		background-color: #00a2ed;
		height: 64px;
		align-items: center;
		justify-content: space-between;
		z-index: 9;
		position: fixed;
		top: 0;
		color: #ffffff;
		/*display: none;*/
		.flex{
			display: flex;
		}
		.left{
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}
		.right{
			flex: 1;
			display: flex;
			align-items:center;
			justify-content: flex-end;
		}
		.menu {
			margin-left: 20px;
			width: 40px;
			height: 40px;
			background: url("../assets/menu.png") 0 no-repeat;
			/*flex:0 0 40px;*/
			/*flex-basis: 40px;*/
			margin-right: 5px;
		}

		.back {
			margin-left: 20px;
			width: 40px;
			height: 40px;
			background: url("../assets/back.png") 0 no-repeat;
			/*flex:0 0 40px;*/
			flex-basis: 40px;
			margin-right: 5px;
		}
		.title{
			font-size: 20px;
		}
		.more {
			background: url("../assets/more.png") 0 0 no-repeat;
			width: 32px;
			height: 32px;
			/*flex: 0 0 40px;*/
			flex-basis: 40px;
			margin-left: 5px;
		}
		.noti{
			background: url("../assets/noti.png") 0 0 no-repeat;
			width: 32px;
			height: 32px;
			/*flex: 0 0 40px;*/
			flex-basis: 40px;
			margin-left: 5px;
		}
	}


</style>
