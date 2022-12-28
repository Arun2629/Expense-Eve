import React from 'react'
import { useDispatch } from 'react-redux';
import { startLoginUser } from '../../actions/userAction';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import {  Button, Form, Input } from 'antd';
import expVid from '../../assets/expvid.mp4'



const Login = (props) => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        props.history.push('/register')
    }

    const onFinish = values => {
            const formData = {
                email: values.email,
                password: values.password
            }
            const redirect = () => {
                props.history.push('/account')
            }
        
            dispatch(startLoginUser(formData, redirect))

        }
   
   

    return (
        
        <div className='login-container'>
        <video src={expVid} autoPlay loop muted/>
            <h2><strong>Login</strong></h2>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    email: '',
                    password: ''
                }}
                onFinish={onFinish}
                >
                <Form.Item
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your email'
                    },
                    {
                        type:'email',
                        message: 'Enter a valid email!'
                    }
                    
                    ]}
                    hasFeedback
                >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                    {min: 8},
                    {max:16}
                    ]}
                    hasFeedback
                >
                    <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" block htmlType="submit" className="login-form-button" >
                    Log in
                    </Button>
                </Form.Item>

                
                <Form.Item
                 className='login-create-btn'>
                    <Button type="primary"  
                            htmlType="button" 
                            style={{backgroundColor: 'green'}} 
                            className="login-form-button" 
                            onClick={handleClick}>
                    Create New Account
                    </Button>
                </Form.Item>
            </Form>
        </div>
       
    )
}

export default Login