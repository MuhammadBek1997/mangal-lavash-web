import React from 'react'
import { UseGlobalContext } from '../components/Context'

const Buy = () => {

  let {data} = UseGlobalContext()

  const foods = data?.restaurants[0]?.rest_data?.data?.foods
  const drinks = data?.restaurants[0]?.rest_data?.data?.drinks
  const sweets = data?.restaurants[0]?.rest_data?.data?.sweets

  return (
    <div className='buy'>
        <div className="buy-cont">
            {
              foods.map((item)=>{
                return (
                  <div>
                    <img src={item.img} alt="" />
                    <h2>{item.price}</h2>
                  </div>
                )
              })
            }
            {
              drinks.map((item)=>{
                return (
                  <div>
                    <img src={item.img} alt="" />
                    <h2>{item.price}</h2>
                  </div>
                )
              })
            }
            {
              sweets.map((item)=>{
                return (
                  <div>
                    <img src={item.img} alt="" />
                    <h2>{item.price}</h2>
                  </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default Buy