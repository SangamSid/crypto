import React, { useContext } from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import "./coindata.css"
import CoinValue from '../CoinDataValue/CoinValue';
import { Context } from '../Context/context';



const CoinData = () => {

  const {user}=useContext(Context)

    const [coinDatas, setCoinDatas] = useState([]);
    const [coinName, setCoinName] = useState("")

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => {
                let datas = res.data;
                console.log(datas)
                setCoinDatas(datas)

            })
            .catch((err) => console.log(err))
    }, [])

    const filterCoin = coinDatas.filter((coin) =>
        coin.name.toLowerCase().includes(coinName.toLowerCase())
    )

  return (
    <div>

      <h2 style={{width:"100%",display:"flex",justifyContent:'center'}}>Hello,{user.name}</h2>
                <form action="" className='inputBox'>
        <input type="text" className='inputText' placeholder='coin name' value={coinName} onChange={(e)=>setCoinName(e.target.value)} />
      </form>
      {
  filterCoin.map((coinData)=>{
   return ( 
   <CoinValue id={coinData.id} name={coinData.name} image={coinData.image} marketcap={coinData.market_cap}
          price={coinData.current_price}  pricechange={coinData.price_change_percentage_24h}/>
   )
  }
  )
}
    </div>
  )
}

export default CoinData
