import { ResturantCard } from "./resCard"
import {data} from "../../data" // named export is exported like this.
import { useEffect, useState } from "react"
import ShimmerComp from "./shimmer"
import { Link } from "react-router-dom"
import {RES_CARD} from "../utils/constants"

 const Body=()=>{
    const [resList, setList] = useState([]);
    const [filterResList, setFilterList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchResturantList()
    },[])

   const fetchResturantList = async() =>{
        const resData = await fetch(RES_CARD);
        
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
            <div  className="res-container" >
                {
                    filterResList.map((d)=>{
                        return(
                           
                           <Link className="res-card" key={d.data.id} to={"/resturant/"+d.data.id}><ResturantCard data={d}/></Link>
                       
                        )
                    })
                } 
            </div></>}
        </div>
    )
}

export default Body;