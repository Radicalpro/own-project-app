import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import * as serviceWorker from './serviceWorker'
import Login from './login'

const rootElement = document.getElementById('root')
ReactDOM.render(
	<Provider store={store}>
		<Login/>
	</Provider>,
	rootElement
)
serviceWorker.unregister()
