import { get } from './../get.js'

export function getAdData() {
	const result = get('api/homead')
	return result;
}
export function getLists(city, page) {
	const result = get('api/list/'+encodeURIComponent(city) + '/' + page)
	return result;
}