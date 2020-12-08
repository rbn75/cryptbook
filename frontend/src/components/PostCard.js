import React from 'react'
import { Descriptions } from 'antd'
import { Link } from 'react-router-dom'
import { Card, Avatar, Typography, Button } from 'antd'
import UpdatePostForm from '../components/UpdatePostForm'
const { Title } = Typography



const PostCard = ({title, comment, _id}) => {
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
      <br/>
      <br/>
      <UpdatePostForm/>
     

    </Card>
    
    
  )
}

export default PostCard
