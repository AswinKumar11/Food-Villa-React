import { useRouteError } from "react-router-dom";
export default  ErrorMessage =  () =>{
    const error = useRouteError();
    return(
        <>
            <h1>Something Went Wrong!!!!</h1>
            <h2>status : {error?.status}</h2>
            <h3>Error Message : {error?.error?.message}</h3>
        </>
    )
}