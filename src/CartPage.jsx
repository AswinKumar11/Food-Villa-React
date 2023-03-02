import React, { useContext } from 'react';
import MenuCard from './MenuCard'
import { CartContextData } from './UserContext';

let totalPrice = 0

const CartPage = () => {
  const {Quantity,QuantityCount} = useContext(CartContextData);
  return (
    <div className='p-3 m-3 bg-gray-50 rounded-lg shadow-lg'>
      {
        Quantity.map((ele)=>{
          totalPrice = totalPrice + ele.count*(ele.price)/100
        })
      }
      <h1 className='font-extrabold text-lg text-center bg-gray-50'>Total Price - {totalPrice}</h1>
      <MenuCard value={Quantity} checkcart={"checkcart"} QuantityCount={QuantityCount} Quantity={Quantity} />
      {
        console.log(totalPrice)
      }
    </div>
  )
}

export default CartPage