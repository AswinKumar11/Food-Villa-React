import React from 'react';
import { IMG_CDN_URL } from '../data';

const MenuCard = ({value,checkcart,Quantity,setQuantity}) => {
  return (
    <div className='flex flex-wrap justify-between'>
      {value.map((item)=> {
        let checking,getIndex
                    checking = Quantity.find((ee)=> ee.id == item.id);
                    if(checking){
                       getIndex = Quantity.findIndex((ee)=> ee.id == item.id);
                    }
                    return (
                    <div className="flex  m-2 p-1 w-80 justify-between shadow-xl bg-gray-200 rounded-lg" key={item.id}>
                        <div>
                            <img src={IMG_CDN_URL + item.cloudinaryImageId} alt={item.id}className="w-[11rem] h-[8rem]" />
                            <h2 className="m-1 p-1 font-bold" >{item.name}</h2>
                            <h2 className="m-1 p-1" >{(item.price)/100} Rupees</h2>
                            {
                              typeof checking!=='undefined' ? <h2 className="m-1 p-1" > Quantity - {Quantity[getIndex].count}</h2>:<h2 className="m-1 p-1" > Quantity - {typeof item.count !== "undefined"?item.count:0}</h2>
                            }
                        </div>
                        {
                        checkcart=="checkcart" ? "":
                        <>
                        <button className="m-2 p-2 font-extrabold" onClick={()=>{
                            let check = Quantity.find((checkInsideCart)=> checkInsideCart.id == item.id)
                            if(!check){
                                item.count=1;
                                setQuantity([...Quantity,item])
                            }
                            else{
                              item.count = item.count+1
                              let check1 = Quantity.filter((a)=>{return item.id !== a.id})
                              setQuantity([...check1,item])
                            }
                        }}>+</button>
                        <button className="m-2 p-2 font-extrabold" onClick={()=>{
                          if(Quantity.length>0){
                            let checkforRemove = Quantity.find((checkforRemove)=> checkforRemove.id == item.id)
                            if(!checkforRemove){
                                let removedData = Quantity.filter((c)=>  {
                                return (c.id !== item.id) })
                                setQuantity(removedData)
                            }
                            else{
                              if(item.count ==1){
                                  item.count = item.count-1
                                  let check2 = Quantity.filter((b)=>{return item.id !== b.id})
                                  setQuantity([...check2,item])
                                  let removedData = Quantity.filter((c)=>  {
                                  return (c.id !== item.id) })
                                  setQuantity(removedData)
                              }
                              else if(item.count>0){
                                item.count = item.count-1
                                let check2 = Quantity.filter((b)=>{return item.id !== b.id})
                                setQuantity([...check2,item])
                              }
                              else{
                                let removedData = Quantity.filter((c)=>  {
                                return (c.id !== item.id) })
                                setQuantity(removedData)
                              }
                            }
                          }
                        }} >-</button>
                        </>
                        }
                    </div>)
                }
                )
              }
    </div>
  )
}

export default MenuCard