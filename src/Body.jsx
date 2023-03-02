
import { FoodCard } from "./FoodCard";
import { useState, useEffect } from "react";
import {ShimmerForSearch,ShimmerForPage} from "./Shimmer";
export default Body = () =>{
    const filterData = (searchText, hotelList) => {
    let filteredHotelList = hotelList.filter((hotelList) =>
      hotelList?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return filteredHotelList;
  };
  const [searchText, setSearchText] = useState();
  const [hotelList2, setHotelList2] = useState([]);
  const [filteredHotelList2, setfilteredHotelList2] = useState([]);

  useEffect(()=>{fetchHotelList()},[])
  async function fetchHotelList() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setHotelList2(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredHotelList2(json?.data?.cards[2]?.data?.data?.cards);
  }
  if(!hotelList2){
    return null;
  }
  return hotelList2.length === 0 ? <ShimmerForPage /> : (
    <>
      <div className="bg-gray-300 m-3 p-3 shadow-xl">
        <input
        type="text" className="border-solid border-2 border-black rounded-lg m-1 p-1"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="border-solid border-2 border-black rounded-lg m-1 p-1"
        onClick={() => {
           if (searchText !== "") {
            const data = filterData(searchText, hotelList2);
            setfilteredHotelList2(data);
          } else {
            setfilteredHotelList2(hotelList2);
          }
        }}
      >
        Search
      </button>
      </div>
      <div className="flex flex-wrap m-3 p-3 bg-gray-200">
        {
        filteredHotelList2.length === 0 ? <ShimmerForSearch />:filteredHotelList2.map((hotelList1) => {
          return <FoodCard {...hotelList1.data} key={hotelList1.data.id} />;
        })
        }
      </div>
    </>
  );
}