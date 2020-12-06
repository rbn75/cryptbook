import React, {useState} from 'react'
import {Form, Button, Input, InputNumber, Select, Upload} from "antd"
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons'
import {recoUpdate} from '../services/recomendation'


function EditRecomForm({item, updateRecom}) {
    const [form]=Form.useForm()

    async function handleSubmit(values){
        console.log(values)

        const recom={
            ...values
        }

        const {data:newRecom}= await recoUpdate(recom)
        updateRecom(newRecom)
        form.resetFields()
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="title" label="Title:" initialValue={item.title}>
          <Input />
        </Form.Item>
        <Form.Item placeholder="Price estimate" name="estimate" label="Price estimate:" initialValue={item.estimate}>
          <InputNumber
          formatter={value=>`$ ${value}.00 USD`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value=>value.replace(".00 USD", "" )
          .replace(/\$\s?|(,*)/g, '')}/>
        </Form.Item>
        <Form.Item placeholder="Current price" name="actual" label="Actual price:" initialValue={item.actual}>
          <InputNumber 
          formatter={value=>`$ ${value}.00 USD`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value=>value.replace(".00 USD", "" )
          .replace(/\$\s?|(,*)/g, '')}/>
        </Form.Item>
        <Form.Item placeholder="Surprise" name="surprise" label="Surprise price:" initialValue={item.surprise}>
          <InputNumber 
          formatter={value=>`$ ${value}.00 USD`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value=>value.replace(".00 USD", "" )
          .replace(/\$\s?|(,*)/g, '')}/>
        </Form.Item>
        <Form.Item name="recomendation" label="Recomendation: " initialValue={item.recomendation}>
          <Select>
            <Select.Option value="Buy">Buy</Select.Option>
            <Select.Option value="Sell">Sell</Select.Option>
            <Select.Option value="Hold">Hold</Select.Option>
          </Select>
        </Form.Item>
        <Button type="primary" block size="middle" htmlType="submit">Edit Recomendation</Button>
      </Form>
    )
}

export default EditRecomForm
