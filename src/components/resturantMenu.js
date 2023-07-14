import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import ShimmerComp from "./shimmer";

const ResturntMenu = () => {

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

   
    return ( 
        <div>
            <h2>{name}</h2>
            <h3>{cuisines.join(',')}</h3>
            <h4>{avgRatingString}</h4>
        </div>
     );
}
 
export default ResturntMenu;