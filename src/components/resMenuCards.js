import { useState } from "react";
import MenuList from "./menuList";


const ResturantMenuCard = ({data , showItem, setShowItem}) => {
   //const {data} = props;
   function handleToggle(){
        setShowItem();
   }
    return ( 
        <>
          <div className=" w-7/12 mx-auto my-2 p-2 shadow-lg bg-green-50 rounded-sm text-sm">
            <div className="flex justify-between cursor-pointer" onClick={handleToggle}>
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
            <span className="text-xs text-green-700 px-1">{"▼"}</span>
            </div>
            {showItem && data.itemCards.map((item)=>{
                return(
                    <MenuList item={item}/>
                )
            })}

          </div>
        </>
     );
}
 
export default ResturantMenuCard;