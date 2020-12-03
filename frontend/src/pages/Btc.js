import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios'
import {VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryLabel} from 'victory'
import { Spin, Row, Col,List, Avatar, Space  } from 'antd';
import { LoadingOutlined, MessageOutlined, LikeOutlined, StarOutlined  } from '@ant-design/icons';
import {Helmet} from "react-helmet";

let priceURL= 'http://rest-sandbox.coinapi.io/v1/ohlcv/GEMINI_SPOT_BTC_USD/latest?period_id=1HRS'
let newsURL='https://feed.cryptoquote.io/api/v1/news/headlines?search=BTC&key=778fae00-359b-11eb-a7c8-83b5e7f8291c'

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function BTC() {
  const [bitcoins, setBitcoin]=useState(null)
  const [bitcoinsNews, setBitcoinNews]=useState(null)


   useEffect(()=>{
    

     async function getBitcoin(){
       const {data}=await axios.get(priceURL, {headers:{'X-CoinAPI-Key': "977F32DF-8B2A-4AB3-B2EC-6997426FE65D" }})
       setBitcoin(data)
     }
     
     async function getNews(){
       const {data}=await axios.get(newsURL)
       console.log(data)
       setBitcoinNews(data)
       
     }
     
      
     getBitcoin()
     getNews()
   },[])
  

  
  return (
    <div>
      <div></div>

      <Row gutter={30}>
        <Col span={10}>
          {bitcoinsNews?
          <List
          itemLayout="vertical"
          size="small"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 4,
          }}
          dataSource={bitcoinsNews}
          renderItem={item => (
            <List.Item
              key={item.title}
              extra={
                <img
                  width={50}
                  alt="logo"
                  src={item.metaData.photo}
                />
              }
            >
              <List.Item.Meta
                title={<a href={item.link}>{item.headline}</a>}
                description={item.summary}
              />
            </List.Item>
          )}
        />:<LoadingOutlined style={{ fontSize: 24 }} spin />
          }
        

        </Col>
        <Col span={14}>
      <h1>BTC/USD</h1>
      {bitcoins?
      <VictoryChart
      theme={VictoryTheme.material}
      >
      <VictoryAxis dependentAxis/>
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc"}
        }}
        data={bitcoins.map(b=>({x:b.time_close,y:b.price_close}))}
      />
    </VictoryChart>: <LoadingOutlined style={{ fontSize: 24 }} spin />
      
    }
    </Col>

  </Row>

    </div>
    
  );

}

export default BTC;