<template>
	<div>
		<nav-tem>
		<span slot="left" class="left">
			<i class="back" @click="$router.go(-1)"></i>
			<span class="title">主编</span>
		</span>
		</nav-tem>
		<ul>
			<li v-for="editor in editors">
				<a :href="`http://news-at.zhihu.com/api/4/editor/${editor.id}/profile-page/ios`"><img class="avatar"
																									  :src="editor.avatar | proxyImg"
																			  alt="">
					<div class="desc">
						<span class="name">{{ editor.name }}</span>
						<span class="bio">{{ editor.bio }}</span>
					</div>
					<div class="divider"></div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import NavTem from '@/components/NavTem'
	export default {
		name: "editors",
		components: {
			NavTem
		},
		data() {
			return {
				editors: []
			}
		},
		created() {
			this.editors = JSON.parse(window.sessionStorage.getItem('editors'));
			console.log(this.editors)
		}
	}
</script>

<style scoped lang="less">
	ul {
		margin-top: 64px;
		padding: 0 15px;
		li {
			a {

				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				border-bottom: 1px solid #ccc;
				padding: 10px 5px;
				.avatar {
					width: 40px;
					height: 40px;
					border-radius: 20px;
					/*margin-bottom: 20px;*/
				}
				.desc {
					margin-left: 10px;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.name {
						margin-bottom: 10px;
					}
					.bio {
						color: #B0B0B0;
						font-size: 14px;
					}
				}

			}
		}
	}
</style>
