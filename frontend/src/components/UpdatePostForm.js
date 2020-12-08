import React, { useState } from 'react'
import { postUpdate, postDelete } from '../services/post'
import { Form, Button, Input } from 'antd'
import { useHistory } from 'react-router-dom'

const UpdatePostForm = ({ title, comment, _id }) => {
    const [form] = Form.useForm()
    const history = useHistory()

    async function handleSubmit(values) {
        await postUpdate(_id, values)
        
    }

    async function handleDelete() {
        await postDelete()
        history.push('/') //place to go.
    }


    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={{
            title,
            comment,

        }}>
            <Form.Item name="title" label='Title:'>
                <Input />
            </Form.Item>
            <Form.Item name="comment" label="Comment:">
                <Input />
            </Form.Item>

            <Button type="primary" block>Edit post</Button>
            <br />
            <br />
            <Button type="ghost" onClick={handleDelete} danger block>Delete post</Button>


        </Form>
    )
}

export default UpdatePostForm




