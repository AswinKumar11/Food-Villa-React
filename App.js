import React from "react";
import ReactDOM from "react-dom/client";
let heading1 = React.createElement("h1",{
    id:"heading1",
    key:"1"
},"Hello");
let heading2 = React.createElement("h2",{
    id:"heading2",
    key:"2"
},"Ulagam");
let container1 = React.createElement("div",{
    id:"container1",
    key:"3"
},[heading1,heading2]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container1);