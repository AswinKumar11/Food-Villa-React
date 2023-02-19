import { createContext, useState } from "react";
import React from 'react'
export const LoginData = createContext({loginDetails:{
    emailId:"aswin@gmail.com",
    logIn:false
}});

export const CartContextData = createContext();

const UserContext = ({children}) => {
    const [Quantity, setQuantity] = useState([])
  return (
    <CartContextData.Provider value={{Quantity,setQuantity}}>{children}</CartContextData.Provider>
  )
}

export default UserContext;