export default function useFormatTime(t) {
	const date = new Date(t).getTime()
	const now = new Date().getTime()
	let time = now - date
	const oneMinute = 60 * 1000
	const oneHour = 60 * oneMinute
	const oneDay = 24 * oneHour
	const oneMonth = 30 * oneDay
	const oneYear = 12 * oneMonth
	let timeAgo
	if(time < oneMinute){
		timeAgo = '刚刚'
	}else if (time < oneHour){
		timeAgo = Math.floor(time / oneMinute) + '分钟前'
	}else if (time < oneDay){
		timeAgo = Math.floor(time / oneHour) + '小时前'
	}else if (time < oneMonth){
		timeAgo = Math.floor(time / oneDay) + '天前'
	}else if (time < oneYear){
		timeAgo = Math.floor(time / oneMonth)+ 1 + '个月前'
	}else{
		timeAgo = Math.floor(time / oneYear) + '年前'
	}
	return timeAgo;
}