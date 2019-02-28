import React from 'react'
import { Icon, Layout, Menu } from 'antd'
import '.././index.css'
import { history } from '../../route'
import config from '../../utils/config'

const SubMenu = Menu.SubMenu
const {
	Header
} = Layout

export default class MyHeader extends React.Component {

	logout = () => {
		console.log("注销")
		sessionStorage.setItem(config.USER_NAME, "");
		sessionStorage.setItem(config.USER_AUTHORIZATION, "");
		history.push('/login')
	}

	render() {
		return (
			<Header className="layout-header">
				<span style={{textAlign: 'center'}}>XXXXXX SYSTEM</span>
				<Menu mode="horizontal" onClick={this.logout} className="layout-header-menu">
					<SubMenu title={<span><Icon type="user"/>{this.props.userName}</span>}>
						<Menu.Item key="logout">注销</Menu.Item>
					</SubMenu>
				</Menu>
			</Header>
		)
	}
}