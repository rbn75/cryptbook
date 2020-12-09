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
  // rules={[{ required: true, message: 'Please input your username!' }, { min: 5, message: 'Username must be minimum 5 characters.' },]}

  // { min:1, message: 'must be minimum 1' }, { max:999999, message: 'must be maximun 999,999' }


    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="title" label="Title:" rules={[{required:true, }]}>
          <Input placeholder="E.g 1 day price objective"/>
        </Form.Item>
        <Form.Item placeholder="Price estimate" name="price estimate" label="Price estimate:" rules={[{ required: true, message: 'number required' }, {type:"number"},]}
>
          <InputNumber min={1} max={999999}
          formatter={value=>`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value=>value
          .replace(/\$\s?|(,*)/g, '')}/>
        </Form.Item>
        <Form.Item placeholder="Current price" name="actual price" label="Actual price:" rules={[{ required: true, message: 'number required' }, {type:"number"},]}>
          <InputNumber min={1} max={999999}
          formatter={value=>`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value=>value
          .replace(/\$\s?|(,*)/g, '')}/>
        </Form.Item>
        <Form.Item placeholder="Surprise" name="surprise" label="Surprise price:" rules={[{ required: true, message: 'number required' }, {type:"number"},]}>
          <InputNumber min={1} max={999999}
          formatter={value=>`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value=>value
          .replace(/\$\s?|(,*)/g, '')}/>
        </Form.Item>
        <Form.Item name="crypto" label="Crypto:">
          <Input defaultValue={curr} disabled/>
        </Form.Item>
        <Form.Item name="recomendation" label="Recomendation:" rules={[{required:true, }]}>
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


