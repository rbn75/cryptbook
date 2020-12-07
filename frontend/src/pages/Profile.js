
import React, { useState, useEffect } from 'react'
import { Row, Col, Typography, Card, Button, Modal } from 'antd'
import { useContextData } from '../hooks/context'
import { getUserPost } from '../services/post'
import PostCard from '../components/PostCard'
import CreatePostForm from '../components/createPostForm'


const { Title, Text } = Typography

const Profile = () => {
  const { user } = useContextData
  let [posts, setPosts] = useState([])
  const [showModal, setShowModal] = useState(false)



  useEffect(() => {
    async function getPosts() {
      const {data}= await getUserPost()
      setPosts(data);

    }

    getPosts()
  }, [])

  // const postsFiltered={
  //   'POSTES': [],
  // }

  function addPost(post){
    setPosts([post,...posts])
    console.log(posts)
    setShowModal(false)

  }

  // posts.forEach (post => {
  //   postsFiltered[post.status]= [...postsFiltered[post.status], post]
  // })

  // posts.forEach(post =>{
  //   posts=[...posts,post]
  // })
 

  return (
    <Row gutter={[16, 16]}>
    <Col span="24">
    <Button type="dash" bloc size="middle" onClick={() => setShowModal(true)}> + </Button>
    </Col>
      <Col xs={24} sm={24} md={8}>
      
        <Card title="Postes">
        {/* {posts.map(post => <PostCard {...post} />)} */}
        {posts ? posts.map(post => <p>{post.title}</p>): "loading"}
        
       

       
       
        

        </Card>
      </Col>
      <Col xs={24} sm={24} md={8}>
        <Card title="test2">

        </Card>
      </Col>
      <Col xs={24} sm={24} md={8}>
        <Card title="tes3">
        

        </Card>
      
      </Col>

      <Modal visible={showModal}
        title="Create a new post"
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
      >
      <CreatePostForm addPost={addPost}/>


      </Modal>


    </Row>
  )
}

export default Profile

