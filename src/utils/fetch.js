import config from './config'

const {HOST} = config

export default async function FetchUtil(url, req) {
	//默认参数
	let request = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	}

	//merge
	const merge = Object.assign({}, request, req)

	//去掉url中可能存在的//
	url = HOST + url.replace(/([^:])\/\//, '$1/')
	console.log('请求->', url, '\n', JSON.stringify(merge, null, 2))
	try {
		const res = await fetch(url, merge)
		const resJSON = await res.json()
		console.log('返回->' + JSON.stringify(resJSON))
		return resJSON
	} catch (e) {
		return {
			code: -1,
			message: '网络不给力'
		}
	}

}