<template>
	<div id="drawer" v-show="drawer_show" @click="hideDrawer">
		<div class="drawer_wrap">
			<el-row>
				<el-col :span="15">
					<div class="head">
						<div class="login"><i></i><span>请登录</span></div>
						<div class="handle">
							<div>
								<i>✨</i>
								<span>我的收藏</span>
							</div>
							<div>
								<i>✨</i>
								<span>离线下载</span>
							</div>
						</div>
					</div>
					<el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
						<el-menu-item-group title="首页">
							<el-menu-item v-for="(item, index) in list" index="'index'" :key="index">{{item.name}}<i
								class="el-icon-message"></i></el-menu-item>
						</el-menu-item-group>

					</el-menu>
				</el-col>
			</el-row>
		</div>

	</div>
</template>

<script>
	export default {
	    name: 'drawer',
		props: {
	        drawer_show: {
	            type: Boolean,
				default: false
			}
		}
	}
</script>
