import { ResturantCard } from "./resCard"
import {data} from "../../data" // named export is exported like this.
import { useEffect, useState } from "react"
import ShimmerComp from "./shimmer"

 const Body=()=>{
    const [resList, setList] = useState([]);
    const [filterResList, setFilterList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchResturantList()
    },[])

   const fetchResturantList = async() =>{
        const resData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0169992&lng=77.7044335&page_type=DESKTOP_WEB_LISTING");
        
        const res = await resData.json();

        setList(res?.data?.cards[2]?.data?.data?.cards); 
        setFilterList(res?.data?.cards[2]?.data?.data?.cards)

   }

    function filterTopRated(){
        let res = resList.filter(res=>res.data.avgRating>4);
        setFilterList(res)
    }

    function searchResturant(value){
        if(value){
        let res = resList.filter(res=>res.data.name.includes(value));
        console.log(res)
        setFilterList(res)
        }
    }

    function search(value){
        if(value){
            setSearchText(value);
        }
        else{
            setSearchText("");
            fetchResturantList();
        }
        
    }

    return(
        <div className="body">

           { resList.length===0? <ShimmerComp/>:<><div className="filter-section">
                <label className="search-res"htmlForfor="search-res">
                <input name="search-res"type="text" placeholder="Search" value={searchText} onChange={(e)=>{
                  search(e.target.value)
                }}/>
                <button onClick={()=>{
                    searchResturant(searchText);
                }}>Search</button>
                </label>
                
                <button className="filter-btn" onClick={()=>{
                    filterTopRated();
                }}>Top Rated</button>
            </div>
            <div className="res-container">
                {
                    filterResList.map((d)=>{
                        return(
                           
                             <ResturantCard data={d} key={d.data.id}/>
                       
                        )
                    })
                } 
            </div></>}
        </div>
    )
}

export default Body;