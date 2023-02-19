import { useContext, useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { ShimmerForSearch } from "./Shimmer";
import  {CartContextData}  from "./UserContext";
import MenuCard from "./MenuCard";
export default HotelMenu = () =>{
    const  {resId}  = useParams();
    const {Quantity,setQuantity} = useContext(CartContextData);
    async function hotelMenuData (){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId="+resId)
        const json = await data?.json();
        setHotelMenuList(json.data);
    }
    useEffect(()=>{
        hotelMenuData();
    },[])
    const[hotelMenuList, setHotelMenuList] = useState();
    if(!hotelMenuList){
        return null
    } //early return
    return (hotelMenuList.length == 0)?<ShimmerForSearch />:(
        <div className="bg-blue-200 m-3 p-3">
            <h1 className="text-2xl font-extrabold text-center mx-3">{hotelMenuList?.name}</h1>
            <MenuCard value = {Object.values(hotelMenuList?.menu?.items)} Quantity = {Quantity} setQuantity={setQuantity} />
        </div>
    );
}