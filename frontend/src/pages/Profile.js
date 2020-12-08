
import React, { useState, useEffect } from 'react'
import { Row, Col, Typography, Card, Button, Modal } from 'antd'
import { useContextData } from '../hooks/context'
import { getUserPost } from '../services/post'
import PostCard from '../components/PostCard'
import CreatePostForm from '../components/createPostForm'
import UpdatePostForm from '../components/UpdatePostForm'


const { Title, Text } = Typography

const Profile = () => {
  const { user } = useContextData
  let [posts, setPosts] = useState([])
  const [showModal, setShowModal] = useState(false)



  useEffect(() => {
    async function getPosts() {
      const { data } = await getUserPost()
      setPosts(data.reverse());

    }

    getPosts()
  }, [])

  const postF = []

  function addPost(post) {
    setPosts([post, ...posts])
    console.log(posts)
    setShowModal(false)

  }
   


  return (
    <Row gutter={[16, 16]}>
      <Col span="24">

      </Col>
      <Col xs={24} sm={24} md={12}>
        <Card title="tes3">


        </Card>

      </Col>




      <Col xs={24} sm={24} md={12}>
      

        <Card title="Posts">
        <Button type="dash" block style={{marginBottom:"10px"}} onClick={() => setShowModal(true)}> Make a Post!!!</Button>
          
          {posts ? posts.map(post => <PostCard key={post._id} {...post} />) : "loading"}
          {/* {posts ? posts.map(post => <p>{post.title}</p>): "loading"} */}

          
          


        </Card>
      </Col>



      <Modal visible={showModal}
        title="Create a new post"
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
      >
        <CreatePostForm addPost={addPost} />

        


      </Modal>
      


    </Row>
  )
}

export default Profile

