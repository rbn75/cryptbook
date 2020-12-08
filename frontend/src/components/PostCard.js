import React, { useState, useEffect } from 'react'
import { Descriptions } from 'antd'
import { Link } from 'react-router-dom'
import { Card, Avatar, Typography, Button, Modal } from 'antd'
import UpdatePostForm from '../components/UpdatePostForm'
import UploadProfilePic from './UploadProfilePic' //to upload photo

const { Title } = Typography



const PostCard = ({title, comment, _id}) => {
  let [posts, setPosts] = useState([])

const [showUptadeModal, setShowUpdateModal]=useState(false)



  return (
    <Card
      type="inner"
      title={title}
      // extra={<Link to={`/PostDetail/${_id}`}>  Update / Delete</Link>} //how to link it???
      style={{ marginBottom: '8px' }}
      hoverable
    >
       <center>
        {/* <Avatar src={image} style={{ backgroundColor: 'white' }} /> */}
        {/* <Title level={4}>Card</Title> */}
      </center>
      {comment}
      <UploadProfilePic/>
      <br/>
      <br/>
      <Button type="dash" block style={{ marginBottom: "10px" }} onClick={() => setShowUpdateModal(true)}> Update a Post!!!</Button>

      <Modal visible={showUptadeModal}
        title="Update a new post"
        onOk={() => setShowUpdateModal(false)}
        onCancel={() => setShowUpdateModal(false)}
      >
        {/* uploading photo */}
        <UpdatePostForm {...posts}/>

      </Modal>


    </Card>
    
    
  )
}

export default PostCard
