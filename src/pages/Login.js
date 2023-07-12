import React from 'react'
import { Button, Form, Input, message } from 'antd';

import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"


function Login() {
    const navigate = useNavigate();
    const onFinish=async(values)=>{
        try {
            const response = await axios.post("/api/user/login",values);
            if (response.data.success)
            {message.success(response.data.message);
                localStorage.setItem("token",response.data.data)
                navigate("/")
            }else{
                message.error(response.data.message);
            }
        } catch (error) {
            message.error(error.message)
            
        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            

            <Form layout="vertical"onFinish={onFinish}>
            <h1>Orange Bus🍊🚌</h1>
                
                <Form.Item
                    label="EmailID"
                    name="emailID"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input style={{ width: '300px' }} />

                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password style={{ width: '300px' }} />
                </Form.Item>
                <div className='d-flex justify-content-between'>
                    <Link to ="/Register">Click here to Register</Link>
                    <Button type="primary" htmlType="Login">
                        Login
                    </Button>
                </div>
            </Form>

        </div>



    )
}
export default Login