
import React, { useState } from 'react'
import { Form, Button, Input, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios'
// add cloudinary account here 
const cloudinaryAPI = ''

const UserUpdateProf = () => {
    const [form] = Form.useForm()
    const [img, setImg] = useState(null)
    const [loading, setLoading] = useState(null)



    async function handleSubmit(values) {
        console.log(values)
    }

    async function handleUploadFile(file) {
        setLoading(true)
        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset', '') //cloudinary config
        const { data: { secure_url } } = await axios.post(cloudinaryAPI, data)
        setImg(secure_url);
        setLoading(false)
    }

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 3 }}>Upload</div>
        </div>
    );

    return (

        <Form form={form} layout='vertical' onFinish={handleSubmit}>

            <Form.Item name='name' label='Name:' />
            <Input />
            <Form.Item />
            <Form.Item name='lastname' label='Last:' />
            <Input />
            <Form.Item />
            <Form.Item name='email' label='Email:' />
            <Input />
            <Form.Item />
            <Form.Item />
            <Form.Item name='image' label='Image:' />
            <Upload name="image"
                showUploadList={false}
                beforeUpload={handleUploadFile}>
                {img ? <img src={img} style={{ width: '100%' }} /> : uploadButton}
            </Upload>
            <Form.Item />
            <Button type='primary' block size='middle' htmlType='submit'>create post</Button>


        </Form>
    )
}

export default UserUpdateProf



