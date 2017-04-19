<template>
    <div >
		<!-- 子路由 -->
		<router-view @showDrawer="showDrawer"> </router-view>

		<!-- 抽屉 -->
		<drawer :drawer_show="drawer_show" :themes="themes" @hideDrawer="hideDrawer"></drawer>
	</div>
</template>

<script>
	import Drawer from '@/components/Drawer'

    export default {
        name: "main",
		data() {
          	return {
				drawer_show: false,
				themes: []
			}
		},
		components: {
            Drawer
		},
		methods: {
			showDrawer() {
			    console.log('收到')
				let themes = sessionStorage.getItem('themes')
				if (themes) {
					this.themes = JSON.parse(themes);
					this.drawer_show = true;
				} else {
					api.getThemes().then(
						(res) => {
//							console.log(res.data)
							this.themes = res.data.others
							sessionStorage.setItem('themes', JSON.stringify(res.data.others));

						},
						(err) => {
							console.log(err)
						}
					).then(() => {
						this.drawer_show = true;})
				}

				},
			//子组件中派发事件, 这里接受
			hideDrawer() {
				this.drawer_show = false;
			}
		}
    }
</script>

<style>

</style>
