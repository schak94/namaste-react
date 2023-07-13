import React from "react";
import Header from "./components/header";
import Body from "./components/body";

const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

export default AppLayout;

