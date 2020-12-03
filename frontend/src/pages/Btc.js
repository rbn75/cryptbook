import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryLabel} from 'victory'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

let baseURL= 'http://rest-sandbox.coinapi.io/v1/ohlcv/GEMINI_SPOT_BTC_USD/latest?period_id=1HRS'

function BTC() {
  const [bitcoins, setBitcoin]=useState(null)

  const datatest = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];

   useEffect(()=>{
     async function getBitcoin(){
       const {data}=await axios.get(baseURL, {headers:{'X-CoinAPI-Key':'977F32DF-8B2A-4AB3-B2EC-6997426FE65D'}})
       console.log(data)
       let datag=data.map(b=>({x:b.price_close,y:b.time_close}))
       setBitcoin(data)
       console.log(datag)
       
     }
     getBitcoin()
      
   },[])

   

  return (
    <div>
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
      
      

    </div>
  );
}

export default BTC;