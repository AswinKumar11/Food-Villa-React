import {LoginData} from "./UserContext"
import { useContext } from "react";
export default Footer = ()=>{
    const {LoginDetails} = useContext(LoginData);
    return(
        <h1 className="p-3 m-3 bg-blue-200 rounded-lg">Logged In User's Mail Id - {LoginDetails?.LoginDetails?.emailId}</h1>
    )
}