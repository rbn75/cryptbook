// import React from 'react'
// import { Card, Avatar, Typography } from 'antd'
// import { Link } from 'react-router-dom'

// const { Title } = Typography


// function PostCard({ title, comment, image, _id}) {
//   return (
//     <Card
//       type="inner"
//       title={title}
//       extra={<Link to={`/posts/${_id}`}>Details</Link>}
//       style={{ marginBottom: '8px' }}
//     >
//       <center>
//         <Avatar src={image} style={{ backgroundColor: 'white' }} />
//       </center>
//       {comment}
//     </Card>
//   )
// }

// export default PostCard 

import { Descriptions } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Avatar, Typography } from 'antd'
const { Title } = Typography



const PostCard = (title, comment, _id) => {
  return (
    <Card
      type="inner"
      title={title}
      extra={<Link to={`/posts/${_id}`}>Details</Link>}
      style={{ marginBottom: '8px' }}
      hoverable
    >
       <center>
        {/* <Avatar src={image} style={{ backgroundColor: 'white' }} /> */}
        <Title level={4}>Card</Title>
      </center>
      {comment}
    </Card>
  )
}

export default PostCard
