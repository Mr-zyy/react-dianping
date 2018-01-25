import { get } from './../get.js'

export function getSearchData(page, cityName, type, keyword) {
	const keywordStr = keyword ? '/' + keyword : ''
	const result = get('api/search/' + page +'/' + cityName + '/' + type + keywordStr)
	return result;
}