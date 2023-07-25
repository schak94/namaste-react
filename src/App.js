import React from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./utils/appStore";


const AppLayout = ()=>{
    return(
        <div className="font-serifs">
            <Provider store={AppStore}>
            <Header/>
            <Outlet/>
            </Provider>
        </div>
    )
}



export default AppLayout;

