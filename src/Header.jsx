import React, { useState,useEffect,useContext } from "react";
import Popup from "./Popup";
import {LoginData,CartContextData} from "./UserContext";
import { Link } from "react-router-dom";
export default Header = () => {
  const {LoginDetails,isLoginDone} = useContext(LoginData);
  const{Quantity} = useContext(CartContextData);
  const [isOnline, setIsOnline] = useState(true);
  const [showPopUp,setShowPopUp] = useState(false);

  useEffect(()=>{
    const isOnline = ()=>{
      setIsOnline(true);
    }
    const isOffline = ()=>{
      setIsOnline(false);
    }
    window.addEventListener("online",isOnline);
    window.addEventListener("offline",isOffline);
    return()=>{
      window.removeEventListener("online");
      window.removeEventListener("offline");
    }
  },[])
  return (
    <div className="flex justify-between p-3 m-3 bg-blue-200 shadow-xl rounded-lg">
      <a href="/">
        <img
            // src={LogoImage}
          src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
          alt="logo"
          className="w-24"
        ></img>
      </a>
      <div>
        <ul className="list-none flex">
          <li className=" p-3">
            <Link to="/">Home</Link>
          </li>
          <li className=" p-3">
            <Link to="/CartPage">Cart - {Quantity.length}</Link>
            </li>
          <li className=" p-3">
            <Link to="/AboutUs">About us</Link>
          </li>
        </ul>
      </div>
      {
        isOnline ?<h1>Online</h1> : <h1>offline</h1>
      }
      {
        showPopUp?<div className="fixed mt-80 ml-[50rem]"><Popup  isLoginDone={isLoginDone} setShowPopUp={setShowPopUp} showPopUp={showPopUp}/></div>:""
      }
        {!LoginDetails.LoginDetails.logIn?<Link to="/Login"><button>Login</button></Link>:<button onClick={()=>{
        setShowPopUp(!showPopUp);
      }}><h1>LogOut</h1></button>
      }
    </div>
  );
};
