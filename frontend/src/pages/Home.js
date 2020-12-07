import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Row, Col,List, Avatar, Typography, Button, Modal, Card  } from 'antd';
import { useContextData } from '../hooks/context';

//URLs for external APIs
let newsURL='https://feed.cryptoquote.io/api/v1/news/headlines?key=778fae00-359b-11eb-a7c8-83b5e7f8291c'

const {Text, Title}=Typography
const { Meta } = Card;

function Home() {

  //initial useState hooks
  const [news, setNews]=useState(null)

  //User context data
  const { user } = useContextData()

  //useEffect hook for initial REST get API functions
  useEffect(()=>{

    async function getNews (){
      const {data}=await axios.get(newsURL)
      setNews(data)
      console.log(data)
    }

    getNews()
  },[])


  return (
    <div>
      <Row>
      {news? <List
      grid={{column: 2 }}
      itemLayout="horizontal"
      pagination={{
            onChange: page => {
            },
            pageSize: 2,
            showLessItems:true
          }}
          dataSource={news}
          renderItem={i=>(
            <a href={i.link}target="_blank">
            <List.Item>
              <Card
      key={i.id}
    hoverable
    style={{ width: "30rem", margin:"5px", height:"35rem" }}
    cover={<img alt="no picture" src={i.metaData.photo} style={{height:"20rem", width:"offset"}} />}
  >
                   <Title type="primary" style={{fontSize:20}}>{i.headline}</Title>
    <Text type="secondary">{i.summary.length>175?
                   `${i.summary.substring(0,175)}...`:i.summary}</Text>
                   <br/>
                   <Text type="secondary" style={{fontSize:10}}><b>Source:</b> {i.provider}</Text>
  </Card>
  </List.Item>
  </a>
  )}
  />:<LoadingOutlined style={{ fontSize: 24 }} spin />
  }
  </Row>
     
    </div>
  );
}

export default Home;
