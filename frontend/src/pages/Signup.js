import React from 'react'
import { Row, Col, Form, Input, Button, Typography, Divider } from 'antd'
import { signupFn } from '../services/auth'
const { Title } = Typography

const googleUrl = process.env.NODE_ENV === 'development' ?
"http://localhost:3000/auth/google" : '/auth/google'

function Signup({ history }) {
    const [form] = Form.useForm()

    async function handleSubmit(userInput) {
      
        await signupFn(userInput)
        history.push('/login')
    }
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    return (
        <Row type="flex" justify="center" align="middle">
      <Col xs={24} sm={24}md={12}lg={8}>
        <Title level={1}>Signup</Title>
      <Divider />
      <div >
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item name='email' label="Email:">
            <Input />
          </Form.Item>
          <Form.Item name='password' label="Password:">
            <Input.Password />
          </Form.Item>
          <Button type="primary" block htmlType="submit">
            Signup
          </Button>
        </Form>
        <Divider>
          Or
        </Divider>
        <a href={googleUrl}>
          <Button block>Singup with Google</Button>
        </a>
        </div>
      </Col>
    </Row>
    )
}

export default Signup
