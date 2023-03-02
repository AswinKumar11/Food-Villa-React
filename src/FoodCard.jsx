import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_CDN_URL } from '../data';
export const FoodCard = ({name,costForTwoString,deliveryTime,cloudinaryImageId,id}) => {
    return  (
      <div className="border-solid bg-gray-200 m-3 p-3 shadow-xl hover:shadow w-52 rounded-lg">
        <img
          src= {IMG_CDN_URL+cloudinaryImageId}
          alt="FoodImage" className="w-48"
        ></img> 
      <Link to = {"/hotelList/"+id} className="m-2 p-2">
        <h4>{name}</h4>
        <h4>{costForTwoString}</h4>
        <h4>{deliveryTime+' min'}</h4>
        </Link>
      </div>
    );
  };