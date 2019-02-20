import React from 'react'

import { Layout, } from 'antd'
import MySider from './components/sider'

const {
	Header, Content, Footer
} = Layout

export default class Main extends React.Component {

	render() {
		return (
			<Layout>
				<MySider/>
				<Layout style={{marginLeft: 200}}>
					<Header style={{background: '#fff', padding: 0}}>
						<h1 style={{textAlign: 'center'}}>XXXXXX SYSTEM</h1>
					</Header>
					<Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
						<div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
							...
							<br/>
							Really
							<br/>...<br/>...<br/>...<br/>
							long
							<br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
							<br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
							<br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
							<br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
							<br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
							<br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
							<br/>...<br/>...<br/>...<br/>...<br/>...<br/>
							content
						</div>
					</Content>
					<Footer style={{textAlign: 'center'}}>
						Ant Design ©2018 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		)
	}
}