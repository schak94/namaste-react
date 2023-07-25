//import React from 'react';
import MenuList from "./menuList";
import { useSelector, useDispatch } from "react-redux";
import { clearItem } from "../utils/carSlice";


const CartComponent = () => {
    const cartItems = useSelector(state=>state.cart.items);
    const dispatch = useDispatch();
    console.log("Cart-Items",cartItems)
    return ( 
        <div className="p-2 m-2 text-center">
            <h1>Cart</h1>
            {cartItems.length>0 && <button className=" bg-black text-white rounded-md p-1" onClick={()=>{
                dispatch(clearItem())
            }}>Clear Cart</button>}
            <div className="w-6/12 p-1 m-auto">
            {cartItems.length>0? cartItems.map((item)=>{
                return(
                    <MenuList item={item}/> 
                )
            }): <span className=" text-xs">No Items Added!</span>}
            </div>
        </div>
     );
}
 
export default CartComponent;