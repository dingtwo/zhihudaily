/**
 * Created by dingjz on 2017/4/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/common/js/api'
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		showDrawer: false,
		themes: []
	},

	mutations: {
		show(state) {
			let themes = sessionStorage.getItem('themes')
			if (themes) {
				state.themes = JSON.parse(themes);
				state.showDrawer = true
			} else {
				api.getThemes().then(
					(res) => {
//							console.log(res.data)
						state.themes = res.data.others
						sessionStorage.setItem('themes', JSON.stringify(res.data.others));

					},
					(err) => {
						console.log(err)
					}
				).then(() => {
					state.showDrawer = true
				})
			}

		},
		hide(state) {
			state.showDrawer = false
		}
	}
})
