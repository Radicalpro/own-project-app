import React from 'react'
import { Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Login from './login'
import Main from './main'

const routeConfig = [
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/main',
		component: Main,
	}
]

const history = createBrowserHistory()

const RouteWithSubRoutes = (route) => (
	<Route path={route.path} render={props => (
		<route.component {...props} />
	)}/>
)

export default class MYRouter extends React.Component {
	render() {
		return (
			<Router history={history}>
				<div>
					{
						routeConfig.map((route, i) => (
							<RouteWithSubRoutes key={i} {...route} />
						))
					}
				</div>
			</Router>
		)
	}
}


