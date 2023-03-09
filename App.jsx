import React,{lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import ErrorMessage from "./src/Error";
import Body from "./src/Body";
import Header from "./src/Header";
import {LoginData} from "./src/UserContext";
import UserContext from "./src/UserContext";
import Footer from "./src/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
const AboutUs = lazy(()=>import("./src/AboutUs"));
const CartPage = lazy(()=>import("./src/CartPage"));
const HotelMenu = lazy(()=>import("./src/HotelMenu"));
const Details = lazy(()=>import("./src/Details"));
const Basic = lazy(()=>import("./src/LoginPage"));
const HomePage = () => {
    const [Login,isLoginDone]=useState({LoginDetails:{
        emailId:"",
        logIn:false
    }});
    return (
      <UserContext>
        <LoginData.Provider value={
            {
                LoginDetails:Login,
                isLoginDone:isLoginDone
            }
        }>
        <Header />
         <Suspense>
        <Outlet />
        </Suspense>
        <Footer />
        </LoginData.Provider>
        </UserContext>
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
