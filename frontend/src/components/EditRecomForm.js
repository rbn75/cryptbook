import React, {useState} from 'react'
import {Form, Button, Input, InputNumber, Select, Upload} from "antd"
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons'
import {recoDelete, recoUpdate} from '../services/recomendation'
import {useHistory}  from 'react-router-dom'


function EditRecomForm({item, curr}) {
    const [form]=Form.useForm()


    async function handleSubmit(values){
        console.log(values)

        const recomUpdated={
            ...values,
            crypto:curr
        }

        const {data:newRecom}= await recoUpdate(item._id, recomUpdated)
    }

    const refreshPage = ()=>{
      window.location.reload();
   }

    async function handleDelete(){
      await recoDelete(item._id)
      refreshPage()
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="title" label="Title:" initialValue={item.title} rules={[{required:true, }]}>
          <Input />
        </Form.Item>
        <Form.Item placeholder="Price estimate" name="estimate" label="Price estimate:" initialValue={item.estimate} rules={[{ required: true, message: 'number required' }, {type:"number"},]}>
          <InputNumber min={1} max={999999}
          formatter={value=>`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value=>value
          .replace(/\$\s?|(,*)/g, '')}/>
        </Form.Item>
        <Form.Item placeholder="Current price" name="actual" label="Actual price:" initialValue={item.actual} rules={[{ required: true, message: 'number required' }, {type:"number"},]}>
          <InputNumber min={1} max={999999}
          formatter={value=>`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value=>value
          .replace(/\$\s?|(,*)/g, '')}/>
        </Form.Item>
        <Form.Item placeholder="Surprise" name="surprise" label="Surprise price:" initialValue={item.surprise} rules={[{ required: true, message: 'number required' }, {type:"number"},]}>
          <InputNumber min={1} max={999999}
          formatter={value=>`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value=>value
          .replace(/\$\s?|(,*)/g, '')}/>
        </Form.Item>
        <Form.Item name="recomendation" label="Recomendation: " initialValue={item.recomendation} rules={[{required:true, }]}>
          <Select>
            <Select.Option value="Buy">Buy</Select.Option>
            <Select.Option value="Sell">Sell</Select.Option>
            <Select.Option value="Hold">Hold</Select.Option>
          </Select>
        </Form.Item>
        <Button type="primary" block size="middle" htmlType="submit">Edit Recomendation</Button>
        <br/>
        <br/>
        <Button type="danger" block size="middle" onClick={handleDelete}>Delete Recomendation</Button>
      </Form>
    )
}

export default EditRecomForm
