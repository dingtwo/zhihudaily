/**
 * Created by dingjz on 2017/4/12.
 * 处理时间, 时间戳
 */
export default {
	toTimestamp: function () {

	},
	// 不需要, 服务端已返回
	lastDay: function () {
		return null;
	},
	// 20170412 -> 4月12日 星期一
	time2Title: function (str) {
		let year = str.substr(0, 4);
		let month = str.substr(4, 2);
		let day = str.substr(6, 2);
		let dateStr = [year, month, day].join('/');
		let date = new Date(dateStr);
		let week = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'][date.getDay()]
		return `${month}月${day}日 ${week}`;
	}
}
