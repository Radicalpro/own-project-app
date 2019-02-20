import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import * as serviceWorker from './serviceWorker'
import MYRouter from './route'

ReactDOM.render(
	<Provider store={store}>
		<MYRouter/>
	</Provider>
	, document.getElementById('root')
)
serviceWorker.unregister()
