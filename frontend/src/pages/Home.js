import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Row, Col,List, Avatar, Typography, Button, Modal, Card, PageHeader, Statistic, Divider  } from 'antd';
import { useContextData } from '../hooks/context';

//URLs for external APIs
let newsURL='https://feed.cryptoquote.io/api/v1/news/headlines?key=778fae00-359b-11eb-a7c8-83b5e7f8291c'
let priceURL="https://rest.coinapi.io/v1/trades"
let statsURL="https://feed.cryptoquote.io/api/v1/stats"
const {Text, Title}=Typography
const { Meta } = Card;

function Home() {

  //initial useState hooks
  const [news, setNews]=useState(null)
  const [bitcoinP, setBitcoinP]=useState(null)
  const [litecoinP, setLitecoinP]=useState(null)
  const [ethereumP, setEthereumP]=useState(null)


  //User context data
  const { user } = useContextData()

  //useEffect hook for initial REST get API functions
  useEffect(()=>{

    async function getNews (){
      const {data}=await axios.get(newsURL)
      setNews(data)
    }

    async function getBitcoinP(){
      const {data}=await axios.get(statsURL+"/btcusd.gemini?key=778fae00-359b-11eb-a7c8-83b5e7f8291c")
      setBitcoinP(data[0])
    }

    async function getLitecoinP(){
      const {data}=await axios.get(priceURL+"/GEMINI_SPOT_LTC_USD/latest",
      {headers:{'X-CoinAPI-Key': "977F32DF-8B2A-4AB3-B2EC-6997426FE65D" }})
      setLitecoinP(data[0])
    }

    async function getEthereumP(){
      const {data}=await axios.get(priceURL+"/GEMINI_SPOT_ETH_USD/latest",
      {headers:{'X-CoinAPI-Key': "977F32DF-8B2A-4AB3-B2EC-6997426FE65D" }})
      setEthereumP(data[0])
    }

    getNews()
    getBitcoinP()
    getLitecoinP()
    getEthereumP()
  },[])


  return (
    <div>
          <PageHeader
      ghost={false}
    >
       <Row>
         <Statistic
          title="BTC"
          prefix="$"
          suffix="USD"
          value={bitcoinP? bitcoinP.last:"-"}
          style={{
            margin: '0 32px',
          }}
        />
        <Statistic
          title="LTC"
          prefix="$"
          suffix="USD"
          value={litecoinP? litecoinP.price:"-"}
          style={{
            margin: '0 32px',
          }}
        />
        <Statistic
          title="ETH"
          prefix="$"
          suffix="USD"
          value={ethereumP? ethereumP.price:"-"}
          style={{
            margin: '0 32px',
          }}
        />
        <Divider type="vertical" />
                 <Statistic
          title="BTC"
          prefix="%"
          value={568.08}
          style={{
            margin: '0 32px',
          }}
        />
        <Statistic
          title="LTC"
          prefix="%"
          value={568.08}
          style={{
            margin: '0 32px',
          }}
        />
        <Statistic
          title="ETH"
          prefix="%"
          value={568.08}
          style={{
            margin: '0 32px',
          }}
        />
      </Row>
    </PageHeader>
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
