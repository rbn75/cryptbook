import React, {useEffect, useState} from 'react';
import axios from 'axios'

let baseURL= 'http://rest-sandbox.coinapi.io/v1/ohlcv/GEMINI_SPOT_BTC_USD/latest?period_id=1DAY'

function BTC() {
  const [bitcoin, setBitcoin]=useState(null)

  useEffect(()=>{
    async function getBitcoin(){
      const {data}=await axios.get(baseURL, {headers:{'X-CoinAPI-Key':'977F32DF-8B2A-4AB3-B2EC-6997426FE65D'}})
      console.log(data)
      setBitcoin(data)
    }
    getBitcoin()
  },[])
  return (
    <div>
      <h1>BTC test</h1>
    </div>
  );
}

export default BTC;