import React from 'react'

import { Icon, Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const {
	Sider
} = Layout
const SubMenu = Menu.SubMenu

export default class MySider extends React.Component {
	// submenu keys of first level
	rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

	state = {
		openKeys: [],
	}

	onOpenChange = (openKeys) => {
		const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
		if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			this.setState({openKeys})
		} else {
			this.setState({
				openKeys: latestOpenKey ? [latestOpenKey] : [],
			})
		}
	}

	render() {
		return (
			<Sider style={{
				overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
			}}
			>
				<div className="logo" style={{width: '200px', height: '50px'}}>
					<h1 style={{textAlign: 'center', paddingTop: '12px', color: '#fff'}}>TY</h1>
				</div>
				<Menu
					theme="dark"
					mode="inline"
					openKeys={this.state.openKeys}
					onOpenChange={this.onOpenChange}
				>
					<SubMenu key="sub1" title={<span><Icon type="user"/><span>用户管理</span></span>}>
						<Menu.Item key="1"><Link to="/user/list">用户列表</Link></Menu.Item>
						<Menu.Item key="3">新增用户</Menu.Item>
						<Menu.Item key="2">绑定角色</Menu.Item>
					</SubMenu>
					<SubMenu key="sub2" title={<span><Icon type="user"/><span>角色管理</span></span>}>
						<Menu.Item key="5">角色列表</Menu.Item>
						<Menu.Item key="6">新增角色</Menu.Item>
						<Menu.Item key="7">绑定菜单</Menu.Item>
					</SubMenu>
					<SubMenu key="sub4" title={<span><Icon type="setting"/><span>系统管理</span></span>}>
						<SubMenu key="sub3" title="节点管理">
							<Menu.Item key="8">菜单管理</Menu.Item>
							<Menu.Item key="9">权限管理</Menu.Item>
							<Menu.Item key="10">菜单绑定权限</Menu.Item>
						</SubMenu>
					</SubMenu>
				</Menu>
			</Sider>
		)
	}
}