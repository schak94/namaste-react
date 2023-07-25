import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

 const Header=()=>{
    const [loginButton, setLogin] = useState("Login");
    const cart= useSelector(state => state.cart.items);
    const onLine = useOnlineStatus();
    return(
        <div className=" bg-green-200 flex justify-between py-1 mb-1 shadow-lg shadow-green-200/50">
            <div className="logo-container">
                <img className=" w-16" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-1 m-1">
                    <li className="px-2 text-sm">{onLine ? "🟢":"🔴"}</li>
                    <li className="px-2 text-sm"> <Link to="/">Home</Link></li>
                    <li className="px-2 text-sm"> <Link to="/about">About</Link></li>
                    <li className="px-2 text-sm"> <Link to="/contact">Contact Us</Link></li>
                    <li className="px-2 text-sm"> <Link to="/cart">Cart-{cart.length}</Link></li>
                    <button className="text-sm px-4" onClick={()=>{
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