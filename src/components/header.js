import React, { useState } from "react";

 const Header=()=>{
    const [loginButton, setLogin] = useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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