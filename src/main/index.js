import React from 'react'

import { Layout } from 'antd'
import MySider from './components/sider'
import MyHeader from './components/header'
import config from '../utils/config'
import './index.css'
import {mainRouteConfig, RouteWithSubRoutes} from '../route'

const {
	Content, Footer
} = Layout

export default class Main extends React.Component {

	render() {
		const userName = sessionStorage.getItem(config.USER_NAME)
		return (
			<Layout>
				<MySider/>
				<Layout style={{marginLeft: 200}}>
					<MyHeader userName={userName}/>
					<Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
						{
							mainRouteConfig.map((route, i) => (
								<RouteWithSubRoutes key={i} {...route} />
							))
						}
					</Content>
					<Footer style={{textAlign: 'center'}}>
						Ant Design ©2018 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		)
	}
}