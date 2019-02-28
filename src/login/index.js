import React from 'react'
import { Button, Form, Icon, Input, message } from 'antd'
import './index.css'
import { history } from '../route'
import { login } from './webapi'
import config from '../utils/config'

class Login extends React.Component {

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				console.log('Received values of form: ', values)
				const result = await login(values)
				console.log(result)
				console.log(result.code)
				if (result.code === 0) {
					sessionStorage.setItem(config.USER_AUTHORIZATION, result.message);
					sessionStorage.setItem(config.USER_NAME, values.userName);
					history.push('/')
				} else {
					message.warn(result.message)
				}
			}
		})
	}

	render() {
		const {getFieldDecorator} = this.props.form
		return (
			<div id="login">
				<div id="components-form-demo-normal-login">
					<Form onSubmit={this.handleSubmit} className="login-form">
						<Form.Item>
							{getFieldDecorator('userName', {
								rules: [{required: true, message: '请输入用户名!'}],
							})(
								<Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="用户名"/>
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password', {
								rules: [{required: true, message: '请输入密码!'}],
							})(
								<Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
								       placeholder="密码"/>
							)}
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								登录
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		)
	}

}

export default Form.create()(Login)