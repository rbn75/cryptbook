import React from 'react'
import {Form, Button, Input} from 'antd'

const CreatePostForm = () => {
const [form]= Form.useForm()


function handleSubmit(values){

}

    return (
        
        <Form form={form} layout='vertical' onFinish={handleSubmit}>
        <Form.Item name='title' label='Title:'/>
        <Input/>
        <Form.Item/>
        <Button type='primary' block size='middle' htmlType='submit'></Button>


        </Form>
    )
}

export default CreatePostForm

