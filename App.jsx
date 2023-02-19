import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import AboutUs from "./src/AboutUs";
import ErrorMessage from "./src/Error";
import Body from "./src/Body";
import Header from "./src/Header";
import CartPage from "./src/CartPage";
import HotelMenu from "./src/HotelMenu";
import Details from "./src/Details";
import Basic from "./src/LoginPage";
import {LoginData} from "./src/UserContext";
import UserContext from "./src/UserContext";
import Footer from "./src/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";

const HomePage = () => {
    const [Login,isLoginDone]=useState({LoginDetails:{
        emailId:"Please Login to see E-mail Id",
        logIn:false
    }});
    return (
      <>
      <UserContext>
        <LoginData.Provider value={
            {
                LoginDetails:Login,
                isLoginDone:isLoginDone
            }
        }>
        <Header />
        <Outlet />
        <Footer />
        </LoginData.Provider>
        </UserContext>
      </>
    );
  };
  const appLinkComp = createBrowserRouter([
    {
        path:"/",
        element:<HomePage />,
        errorElement:<ErrorMessage />,
        children:[
            {
                path:"/AboutUs",
                element:<AboutUs />,
                children:[
                    {
                        path:"details",
                        element:<Details />
                    }
                ]
            },
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/CartPage",
                element:<CartPage />
            },
            {
                path:"/hotelList/:resId",
                element:<HotelMenu />
            },
            {
                path:"/Login",
                element:<Basic />
            }
        ]
    }
]
);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appLinkComp} />);
