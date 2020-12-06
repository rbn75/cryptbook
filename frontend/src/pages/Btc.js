import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios'
import {getReco} from '../services/recomendation'
import {VictoryLine, VictoryChart, VictoryAxis, VictoryLabel, VictoryVoronoiContainer, VictoryTooltip} from 'victory'
import { Spin, Row, Col,List, Avatar, Space, Typography, Button, Skeleton, Modal  } from 'antd';
import { LoadingOutlined, MessageOutlined, LikeOutlined, StarOutlined  } from '@ant-design/icons';
import {Helmet} from "react-helmet";
import { useContextData } from '../hooks/context';
import EditRecomForm from '../components/EditRecomForm'

import CreateRecomForm from '../components/createRecomForm'


let priceURL= 'http://rest-sandbox.coinapi.io/v1/ohlcv/GEMINI_SPOT_BTC_USD/latest?period_id=1HRS'
let newsURL='https://feed.cryptoquote.io/api/v1/news/headlines?search=BTC&key=778fae00-359b-11eb-a7c8-83b5e7f8291c'
const curr="BTC"

const {Text}=Typography
function BTC() {
  const [bitcoins, setBitcoin]=useState(null)
  const [bitcoinsNews, setBitcoinNews]=useState(null)
  const [recoms, setRecoms]=useState([])
  const [showModal, setShowModal]=useState(false)
  const [showEditModal, setShowEditModal]=useState(false)
  const [itemEdit, setItemEdit]=useState(false)

  const { user } = useContextData()


   useEffect(()=>{
    

     async function getBitcoin(){
       const {data}=await axios.
       get(priceURL, 
        {headers:{'X-CoinAPI-Key': "977F32DF-8B2A-4AB3-B2EC-6997426FE65D" }})
       setBitcoin(data)
     }
     
     async function getNews(){
       const {data}=await axios.get(newsURL)
       setBitcoinNews(data)
       
     }
     async function getRecoms(){
       const {data}=await getReco()
       console.log(data)
       setRecoms(data.
        filter(r=>r.crypto=="BTC")
        .sort((a,b)=>(a.createdAt<b.createdAt)?1:-1)
        .slice(0,3))
     }
     
      
     getBitcoin()
     getNews()
     getRecoms()
   },[])
   
   



   //Will replace the filtered array once frontend is fully working,
    const BTCrecoms={'BTC':[]}

    function addRecom(recom){
      setRecoms([recom,...recoms])
      setShowModal(false)
    }

    recoms.forEach(recom=>{
      BTCrecoms[recom.crypto]=[...BTCrecoms[recom.crypto],recom]
    })
    
    function onLoadMore(){
      setRecoms([...recoms,])
    }

    const loadMore=( <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px',
      }}
    >
      <Button className onClick={onLoadMore}>loading more</Button>
    </div>)
  
  return (
    <div>

      <Row gutter={30}>
        <Col span={14} style={{padding:"0 20px"}}>
          <div>
      {bitcoins?
      <VictoryChart
      height={200}
      containerComponent={<VictoryVoronoiContainer
        labels={({ datum }) => `$${datum.y}, ${datum.x.slice(0,16)} `}
        labelComponent={
          <VictoryTooltip  dy={-1} constrainToVisibleArea />
        }
      />
      }
      >
        <VictoryLabel text="BTC/USD Price" x={225} y={30} textAnchor="middle"/>
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
    <Button type="primary" block size="middle" onClick={() => setShowModal(true)}>Click here to make a recomendation!</Button>
    <Modal
        visible={showModal}
        title="Make a recomendation!"        
        footer={null}
        onCancel={() => setShowModal(false)}
      >
        <CreateRecomForm addRecom={addRecom} curr={curr}/>
      </Modal>
    {recoms?   <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={recoms}
      renderItem={item => (
      <List.Item actions={user? item.userId==user._id?[<a key="list-loadmore-edit" onClick={() => [setShowEditModal(true), console.log(item), setItemEdit(item)]}>edit</a>]:["Author's profile"]:""}>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={item.title}
              description={`Estimate: ${item.estimate} | Actual: ${item.actual} | Surprise: ${item.surprise}`}
            />
            <p>Recomendation: {item.recomendation}</p>
        </List.Item>
      )
    } 
    />
    
    :<LoadingOutlined style={{ fontSize: 24 }} spin />}
      <Modal
        visible={showEditModal}
        title="Edit"
        footer={null}
        onOk={() => setShowEditModal(false)}
        onCancel={() => setShowEditModal(false)}
      >
        <EditRecomForm item={itemEdit} curr={curr}/>
      </Modal> 
      </div>
    </Col>
    <Col span={10} style={{padding:"30px 10px 30px 0"}}>
          {bitcoinsNews?
          <List
          itemLayout="vertical"
          size="small"
          pagination={{
            onChange: page => {
            },
            pageSize: 3,
            showLessItems:true
          }}
          dataSource={bitcoinsNews}
          renderItem={item => (
            <List.Item
              key={item.title}
              extra={
                <img
                  width={75}
                  alt="logo"
                  src={item.metaData.photo}
                />
              }
            >
              <List.Item.Meta
                title={<a href={item.link} target="_blank">{item.headline}</a>}
                description={item.summary.length>100?
                   `${item.summary.substring(0,100)}...`:item.summary}
                   style={{textAlign:"right"}}
              />
              <Text type="secondary" style={{fontSize:10}}><b>Source:</b> {item.provider}</Text>
            </List.Item>
            
          )}
        />:<LoadingOutlined style={{ fontSize: 24 }} spin />
          }
        

        </Col>

  </Row>

    </div>
    
  );

}

export default BTC;