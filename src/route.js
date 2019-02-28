import React from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import config from './utils/config'
import Login from './login'
import Main from './main'
import Blank from './blank'
import UserLsit from './user/list'

const indexRouteConfig = [
	{
		path: '/login',
		component: Login,
		requiresAuth: false,
	},
]

export const mainRouteConfig = [
	{
		path: '/',
		component: Blank,
		requiresAuth: true,
	},
	{
		path: '/user/list',
		component: UserLsit,
		requiresAuth: true,
	}
]

export const history = createBrowserHistory()

export const RouteWithSubRoutes = (route, authPath = '/login') => (
	<Route exact
	       path={route.path}
	       render={props => {
		       console.log('route.requiresAuth---' + route.requiresAuth)
		       const sessionId = sessionStorage.getItem(config.USER_AUTHORIZATION)
		       console.log('config.USER_AUTHORIZATION---' + sessionId)
		       console.log('route.path---' + route.path)
		       if (!route.requiresAuth || (sessionId != null && sessionId !== '') || route.path === authPath) {
			       return <route.component {...props}/>
		       }
		       return <Redirect to='/login'/>
	       }}
	>
	</Route>
)

export default class MYRouter extends React.Component {
	render() {
		// localStorage.removeItem(config.USER_AUTHORIZATION);
		return (
			<Router history={history}>
				<div>
					<Switch>
						{
							indexRouteConfig.map((route, i) => (
								<RouteWithSubRoutes key={i} {...route} />
							))
						}
						<Route component={Main}/>
					</Switch>
				</div>
			</Router>
		)
	}
}


