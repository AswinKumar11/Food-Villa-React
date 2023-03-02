import { useState } from "react";
export default AboutUs = () => {
    const [openAccordion, setOpenAccordion] = useState({accord:{
        firstAccord:false,
        secondAccord:false,
    }});
    {console.log(openAccordion);}
    return(
        <div className="m-3 p-3 bg-gray-100">
        <h1 className="font-extrabold text-center">Welcome to Food Villa</h1>
        <div>
        <div className="flex flex-wrap justify-between">
            <h3>Welcome to my first react app </h3>
            {
                !openAccordion?.accord?.firstAccord?<button className="font-extrabold text-2xl" onClick={()=>{setOpenAccordion({accord:{
                    firstAccord:true,
                    secondAccord:false,
                }})}}><h1>^</h1></button>:
                <button className="font-extrabold text-2xl rotate-180" onClick={()=>{setOpenAccordion({accord:{
                    firstAccord:false,
                    secondAccord:false,
                }})}}><h1>^</h1></button>
            }
        </div>
        {
            openAccordion?.accord?.firstAccord?<h1>Hi, I'm Aswin Kumar</h1>:""
        }
        </div>
        <div className="flex flex-wrap justify-between mt-3">
            <h3>Welcome to my first react app </h3>
            {
                !openAccordion?.accord?.secondAccord?<button className="font-extrabold text-2xl" onClick={()=>{setOpenAccordion({accord:{
                    firstAccord:false,
                    secondAccord:true,
                }})}}><h1>^</h1></button>:
                <button className="font-extrabold text-2xl rotate-180" onClick={()=>{setOpenAccordion({accord:{
                    firstAccord:false,
                    secondAccord:false,
                }})}}><h1>^</h1></button>
            }
        </div>
        {
            openAccordion?.accord?.secondAccord?<h1>Hi, I'm Aswin Kumar</h1>:""
        }
        </div>
    );
}