import {LoginData} from "./UserContext"
import { useContext } from "react";
export default Footer = ()=>{
    const {LoginDetails} = useContext(LoginData);
    const nameOfUser = LoginDetails?.LoginDetails?.emailId.split('@');
    return(
        <h1 className="bottom-0 p-3 m-3 bg-gray-50 rounded-lg text-center static">Welcome To Food Villa  {nameOfUser[0]}</h1>
    )
}