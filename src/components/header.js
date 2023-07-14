import React, { useState } from "react";
import { Link } from "react-router-dom";

 const Header=()=>{
    const [loginButton, setLogin] = useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/contact">Contact Us</Link></li>
                    <li> <Link to="/">Cart</Link></li>
                    <button className="login-button" onClick={()=>{
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