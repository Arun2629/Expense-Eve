import React from 'react'
import { useDispatch } from 'react-redux'
import { startRegistertUser } from '../../actions/userAction'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const Register = (props) => {
   
    const dispatch = useDispatch()
    
    const onFinish = values => {
        const formData = {
            username: values.username,
            email: values.email,
            password: values.password
        }
        const redirect = () => {
            props.history.push('/login')
        }
    
        dispatch(startRegistertUser(formData, redirect))

    }

    return (
        <div className='login-container'>
            <h2>Register</h2>
           <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    username: '',
                    email: '',
                    password: ''
                }}
                onFinish={onFinish}
                >
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!'
                    }
                    
                    ]}
                    hasFeedback
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>    

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

                <Form.Item
                style={{display: 'flex', justifyContent: 'center'}}>
                    <Button type="primary" htmlType="submit" className="login-form-button" >
                    Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Register