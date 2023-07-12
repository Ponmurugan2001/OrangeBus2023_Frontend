import React from 'react'
import { Button, Form, Input, message } from 'antd';

import { Link } from 'react-router-dom';
import axios from "axios"


function Register() {
    const onFinish=async(values)=>{
        try {
            const response = await axios.post("/api/user/register",values);
            if (response.data.success)
            {message.success(response.data.message);
            }else{
                message.error(response.data.message);
            }
        } catch (error) {
            
        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            

            <Form layout="vertical" onFinish={onFinish}>
            <h1>Orange Bus🍊🚌</h1>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input style={{ width: '300px' }} />
                </Form.Item>
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
                    <Link to ="/Login">Click here to Login</Link>
                    <Button type="primary" htmlType="Register">
                        Register
                    </Button>
                </div>
            </Form>

        </div>



    )
}
export default Register