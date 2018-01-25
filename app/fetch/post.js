import 'whatwg-fetch'
import 'es6-promise'

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式

function obj2params(obj){
	let result = '';
	for (let key in obj){
		result += '&' +  key + '=' + encodeURIComponent(obj[obj]);
	}
	if (result){
		result = result.slice(1)
	}
	return result;
}

export default function post(url, obj) {
	let result = fetch(url,{
		method: 'POST',
		credentials: 'include',
		headers: {
      'Accept': 'application/json, text/plain, */*'
    },
    body: obj2params(obj)
	})
	return result;
}