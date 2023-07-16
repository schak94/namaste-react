import React from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";


const AppLayout = ()=>{
    return(
        <div className="text-base">
            <Header/>
            <Outlet/>
        </div>
    )
}



export default AppLayout;

