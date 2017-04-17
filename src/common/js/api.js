/**
 * Created by dingjz on 2017/4/11.
 */
import axios from 'axios'
export default {
	// TODO: 使用sessionStorage缓存
	//首页
	getIndexData: function () {
		return axios.get('/zhihu/news/latest')
	},
	getMore: function (lastTime) {
		return axios.get(`/zhihu/news/before/${lastTime}`)
	},
	//日报列表
	getThemes: function (){
		return axios.get('/zhihu/themes')
	},
	//详情
	getDetail: function (id) {
		return axios.get(`/zhihu/news/${id}`)
	},
	getThemeDetail: function (id) {
		return axios.get(`/zhihu/theme/${id}`)
	}
}
