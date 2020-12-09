import React, {useEffect, useState} from 'react';
import axios from 'axios'

let baseURL= 'http://rest-sandbox.coinapi.io/v1/ohlcv/GEMINI_SPOT_LTC_USD/latest?period_id=1HRS'


function Ltc() {
  const [litecoin, setLitecoin]=useState(null)
  
  useEffect(()=>{
    async function getLitecoin(){
      const {data}=await axios.get(baseURL, {headers:{'X-CoinAPI-Key':'977F32DF-8B2A-4AB3-B2EC-6997426FE65D'}})
      console.log(data)
      setLitecoin(data)
    }
    getLitecoin()
  },[])
  return (
    <div>
      <h1>ltc test</h1>
    </div>
  );
}

export default Ltc;