import React, {useState} from 'react'
import {Form, Button, Input, InputNumber, Select, Upload} from "antd"
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons'
import {recoCreate} from '../services/recomendation'


const CreateRecomForm=({addRecom,curr})=> {
    const [form]=Form.useForm()

    async function handleSubmit(values){
        console.log(values)

        const recom={
            ...values,
            crypto:curr
        }

        const {data:newRecom}= await recoCreate(recom)
        addRecom(newRecom)
        form.resetFields()
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="title" label="Title:">
          <Input placeholder="E.g 1 day price objective"/>
        </Form.Item>
        <Form.Item placeholder="Price estimate" name="estimate" label="Price estimate:">
          <InputNumber
          formatter={value=>`$ ${value}.00 USD`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value=>value.replace(".00 USD", "" )
          .replace(/\$\s?|(,*)/g, '')}/>
        </Form.Item>
        <Form.Item placeholder="Current price" name="actual" label="Actual price:">
          <InputNumber 
          formatter={value=>`$ ${value}.00 USD`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value=>value.replace(".00 USD", "" )
          .replace(/\$\s?|(,*)/g, '')}/>
        </Form.Item>
        <Form.Item placeholder="Surprise" name="surprise" label="Surprise price:">
          <InputNumber 
          formatter={value=>`$ ${value}.00 USD`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value=>value.replace(".00 USD", "" )
          .replace(/\$\s?|(,*)/g, '')}/>
        </Form.Item>
        <Form.Item name="crypto" label="Crypto:">
          <Input defaultValue={curr} disabled/>
        </Form.Item>
        <Form.Item name="recomendation" label="Recomendation: ">
          <Select>
            <Select.Option value="Buy">Buy</Select.Option>
            <Select.Option value="Sell">Sell</Select.Option>
            <Select.Option value="Hold">Hold</Select.Option>
          </Select>
        </Form.Item>
        <Button type="primary" block size="middle" htmlType="submit">Add Recomendation</Button>
      </Form>
    )
}

export default CreateRecomForm
