import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import ShimmerComp from "./shimmer";
import ResturantMenuCard from "./resMenuCards";

const ResturntMenu = () => {
    const [showItem, setShowItem] = useState(null);

    const [menuData, setMenuData] = useState(null);

    const { resId } = useParams();

    const fetchMenu = async()=>{
            const data = await fetch(MENU_URL+resId);

            const json = await data.json();

            setMenuData(json.data);
    }
    
    useEffect(()=>{

        fetchMenu();

    },[])

    if(menuData === null) return <ShimmerComp/>

    
    const {name,cuisines, avgRatingString} = menuData?.cards[0]?.card?.card?.info;

    const {cards} = menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

    console.log(cards)

    const resCards = cards.filter((c)=> c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(resCards)
    return ( 
        <div className="text-center">
            <div className="p-1 m-1">
            <h2 className="font-bold">{name}</h2>
            <h6 className="text-xs">{cuisines.join(',')}</h6>
            </div>
            <div className="p-1 m-1">
            {resCards.map((c,index)=>{
                return(
                    <ResturantMenuCard key={c?.card?.card?.title} data={c?.card?.card} showItem={index === showItem?true:false} setShowItem={()=>{
                        setShowItem((pre) => pre===index? null: index);
                    }}/>
                )
            })}

            </div> 
        </div>
     );
}
 
export default ResturntMenu;