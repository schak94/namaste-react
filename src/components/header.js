import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

 const Header=()=>{
    const [loginButton, setLogin] = useState("Login");
    const onLine = useOnlineStatus();
    return(
        <div className="flex justify-between p-1 m-1 shadow-lg">
            <div className="logo-container">
                <img className="w-24" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-1 m-1">
                    <li className="px-3 text-sm">{onLine ? "🟢":"🔴"}</li>
                    <li className="px-3 text-sm"> <Link to="/">Home</Link></li>
                    <li className="px-3 text-sm"> <Link to="/about">About</Link></li>
                    <li className="px-3 text-sm"> <Link to="/contact">Contact Us</Link></li>
                    <li className="px-3 text-sm"> <Link to="/">Cart</Link></li>
                    <button className="text-sm" onClick={()=>{
                        setLogin((pre)=>{
                            return pre==="Login"?"Logout":"Login";
                        })
                    }}>{loginButton}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;