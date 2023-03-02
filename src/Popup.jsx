export default Popup = ({isLoginDone,setShowPopUp,showPopUp})=>{
    return(
        <>
            <div className="bg-gray-300 w-72 h-48 fixed border-2 border-black rounded-md">
                <h1 className="m-2 p-2 mt-7">Are you sure you want to LogOut ?</h1>
                <div className="m-3 p-3 flex justify-center">
                    <button className="bg-gray-400 hover:bg-red-400  m-2 p-2 border-2 border-black rounded-md" onClick={()=>{
                        setShowPopUp(!showPopUp);
                        isLoginDone({LoginDetails:{
                            emailId:"",
                            logIn:false
                        }});
                    }}>yes</button>
                    <button className="bg-gray-400  hover:bg-green-400 m-2 p-2 border-2 border-black rounded-md" onClick={()=>{
                        setShowPopUp(!showPopUp);
                    }}>Cancel</button>
                </div>
                
            </div>
        </>
    );
}