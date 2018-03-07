import { get } from './../get.js'

export function getCommentData(page, id) {
	const result = get('api/comment/' + page + '/' + id)
	return result;
}
export function getInfos(city, id) {
	const result = get('api/info/'+encodeURIComponent(city) + '/' + id)
	return result;
}