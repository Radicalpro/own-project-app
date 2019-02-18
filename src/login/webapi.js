import {Fetch} from '../utils/index'

export function login(from) {
	return Fetch('user/login', {
		method: 'POST',
		body: JSON.stringify(from)
	})
}